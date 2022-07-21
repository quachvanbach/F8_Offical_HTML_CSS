
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'MY_MUSIC_PLAYER';

const playlist = $('.playlist');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const cd = $('.cd');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const prevBtn = $('.btn-prev');
const nextBtn = $('.btn-next');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');


const app = {

    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},


    songs: [
        {
            name: '1Em nên dừng lại',
            singer: 'Khang Việt',
            path: './assets/music/emnendunglai.mp3',
            image: './assets/image/emnendunglai.jpg'
        },
        {
            name: '2Em Nen Dung Lai Di',
            singer: 'Nsmall (Exclusive)',
            path: 'https://cf-media.sndcdn.com/eaAiwKnEdCvb?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vZWFBaXdLbkVkQ3ZiKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTY1ODM3NDMwNn19fV19&Signature=aB4c51iLonPM~g2SRguN5I7q~s1zMDGcvNFQ8n6icO~~wg9~InjUg~yKFsST-aX0ayJIRPNw9ZAhp1GdGYDP4M62XFgpxBG0a6YEiAVKkAORhOvCbl8K6Yivnxl1mRe5RJr7eupJ8QOIL73jTOJj-7dSHnBREPSWiCdHEm2jV~TAswgj1MKnCmRtmy6y4qWcug63mznv8CHKOL4rdVHaqdniI4c8tYH86PW1t4CeVaLaTHgLZNEaI~Eq08RiQRpB1iIWNvErsLZEXTKGegxsUlB6mgBOlCSvgbYmfn9cChhBYUeIa28bYk9wFVV67YMNn-mlB1SAKUzgbgabm3LNLA__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ ',
            image: './assets/image/emnendunglai.jpg'
        },
        {
            name: '3Thương Em',
            singer: 'Châu Khải Phong',
            path: './assets/music/thuongem.mp3',
            image: './assets/image/thuongem.jpg'
        }, {
            name: '4Em nên dừng lại',
            singer: 'Khang Việt',
            path: './assets/music/emnendunglai.mp3',
            image: './assets/image/emnendunglai.jpg'
        },
        {
            name: '5Thương Em',
            singer: 'Châu Khải Phong',
            path: './assets/music/thuongem.mp3',
            image: './assets/image/thuongem.jpg'
        },
    ],
        setConfig: function (key, value) {
            this.config[key] = value;
            localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
        },

        render: function () {
            const htmls = this.songs.map((song, index) => {
                return `
            <div  class="song ${index === this.currentIndex ? 'active' : ''}" data-index = "${index}">
                <div class="thumb" style="background-image: url('${song.image}')"> </div>
                <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="artist">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>`
            })
            playlist.innerHTML = htmls.join('')
        },

        defineProperties: function () {
            Object.defineProperty(this, 'currentSong', {
                get: function () {
                    return this.songs[this.currentIndex]
                }
            })
        },

        handleEvents: function () {
            const _this = this;
            const cdWidth = cd.offsetWidth;

            // Xử lý quay CD
            const cdThumbAnimate = cdThumb.animate([
                { transform: 'rotate(306deg)' }
            ], {
                duration: 10000,
                interations: Infinity
            })
            cdThumbAnimate.pause()


            // Xử lý scroll playlist
            document.onscroll = function () {
                const scollTop = window.scrollY //|| document.documentElement.scrollTop;
                const newCdWidth = cdWidth - scollTop;

                cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
                cd.style.opacity = newCdWidth / cdWidth;
            }

            //Xử lý khi click play
            playBtn.onclick = function () {
                if (_this.isPlaying) {
                    audio.pause();
                } else {
                    audio.play();
                }
            }

            // Khi bài hát được play
            audio.onplay = function () {
                _this.isPlaying = true;
                player.classList.add('playing');
                cdThumbAnimate.play()
            }

            // Khi bài hát được pause
            audio.onpause = function () {
                _this.isPlaying = false;
                player.classList.remove('playing');
                cdThumbAnimate.pause()
            }

            // khi tiến độ bài hát thay đổi:
            audio.ontimeupdate = function () {
                if (audio.duration) {
                    const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                    progress.value = progressPercent
                }
            }

            // Xứ lý khi tua bài hát
            progress.onchange = function (e) {
                const seekTime = audio.duration / 100 * e.target.value;
                audio.currentTime = seekTime;
            }

            //Khi next bài hát
            nextBtn.onclick = function () {
                if (_this.isRandom) {
                    _this.playRandomSong()
                } else {
                    _this.nextSong()
                }
                audio.play()
                _this.render()
                _this.scrollToActiveSong()
            }

            // Khi prev bài hát
            prevBtn.onclick = function () {
                if (_this.isRandom) {
                    _this.playRandomSong()
                } else {
                    _this.prevSong()
                }
                audio.play()
            }

            // Khi bật phát ngẫu nhiên
            randomBtn.onclick = function () {
                _this.isRandom = !_this.isRandom;
                _this.setConfig("isRandom", _this.isRandom); 
                randomBtn.classList.toggle('active', _this.isRandom);
            }

            // Xử lý khi bấm nút lặp lại
            repeatBtn.onclick = function () {
                _this.isRepeat = !_this.isRepeat;
                _this.setConfig("isRepeat", _this.isRepeat);
                repeatBtn.classList.toggle('active', _this.isRepeat);
            }

            // Xử lý khi chạy hết 1 bài hát
            audio.onended = function () {
                if (_this.isRepeat) {
                    audio.play();
                } else {
                    nextBtn.click();
                }
            }

            // Khi click vào bài hát trong playlist
            playlist.onclick = function (e) {
                const songNode = e.target.closest('.song:not(.active)');
                if (songNode || e.target.closest('.option')) {

                    // Xử lý khi click vào song
                    if (songNode) {
                        _this.currentIndex = Number(songNode.dataset.index);
                        _this.loadCurrentSong();
                        _this.render();
                        audio.play();
                    }

                    // Xử lý khi click vào option
                    if (e.target.closest('.option')) {

                    }
                }
            }
        },
        scrollToActiveSong: function () {
            setTimeout(() => {
                $('.song.active').scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            }, 500)
        },

        loadCurrentSong: function () {
            heading.textContent = this.currentSong.name;
            cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`,
                audio.src = this.currentSong.path
        },

        loadConfig: function () {
            this.isRandom = this.config.isRandom;
            this.isRepeat = this.config.isRepeat; 

            // Object.assign(this, this.config); 
        },

        nextSong: function () {
            this.currentIndex++;
            if (this.currentIndex >= this.songs.length) {
                this.currentIndex = 0
            }
            this.loadCurrentSong()
        },

        prevSong: function () {
            this.currentIndex--;
            if (this.currentIndex < 0) {
                this.currentIndex = this.songs.length - 1
            }
            this.loadCurrentSong()
        },

        playRandomSong: function () {
            let newIndex
            do {
                newIndex = Math.floor(Math.random() * this.songs.length)
            } while (newIndex === this.currentIndex)
            this.currentIndex = newIndex;
            this.loadCurrentSong()
        },

        start: function () {
            // Gán cấu hình cho app.
            this.loadConfig();

            // Định nghĩa các thuộc tính.
            this.handleEvents();

            // Lắng nghe và xử lý cá sự kiện.
            this.defineProperties();

            // Tải thông tin bài hát đầu tiên vao UI khi chạy ứng dụng.
            this.loadCurrentSong();

            // Render playlist.
            this.render();

            // Hiển thị trạng thái của button Repeat và Random
            randomBtn.classList.toggle('active', this.isRandom);
            repeatBtn.classList.toggle('active', this.isRepeat);

        }
    
}
app.start();

// Thay vì tạo 1 biến chứa data. Làm lại lấy data từ server
// Tìm hiểu về thông số thứ 2 của toggle.
// Xem lại tính năng scrollIntoView.