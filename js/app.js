// side menu
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

function openMenu() {
  mobileMenu.classList.add("mobile-menu--active");
  menuOverlay.classList.add("menu-overlay--active");
}

function closeMenu() {
  mobileMenu.classList.remove("mobile-menu--active");
  menuOverlay.classList.remove("menu-overlay--active");
}

hamburgerBtn.addEventListener("click", openMenu);
menuOverlay.addEventListener("click", closeMenu);

// swiper
const mentors = [
  {
    id: 1,
    name: "هوش مصنوعی",
    role: "Artificial Intelligence",
    image: "./images/ai.webp",
  },
  {
    id: 2,
    name: "علی محمدی",
    role: "منتور",
    image: "./images/team-1.jpg",
  },
  {
    id: 3,
    name: "محمد زارعی",
    role: "منتور",
    image: "./images/team-2.jpg",
  },
  {
    id: 4,
    name: "مریم رضایی",
    role: "منتور",
    image: "./images/team-3.jpg",
  },
  {
    id: 5,
    name: "مهسا صالحی",
    role: "پشتیبان",
    image: "./images/team-4.jpg",
  },
  {
    id: 6,
    name: "هانی منوچهر",
    role: "پشتیبان",
    image: "./images/team-5.jpg",
  },
];

const mentorsContainer = document.querySelector("#mentors-container");

mentorsContainer.innerHTML = mentors
  .map((mentor) => {
    return `

 <div class="swiper-slide">
    <div class="mentor-card">
      <div class="mentor-image-wrapper">
        <img
          src="${mentor.image}"
          alt="${mentor.name}"
          class="mentor-image"
        />
      </div>
      <h3 class="mentor-name">${mentor.name}</h3>
      <p class="mentor-role">${mentor.role}</p>
    </div>
  </div>

`;
  })
  .join("");

// Mentors Swiper - Isolated Instance
const swiperMentors = new Swiper(".swiper-mentors", {
  spaceBetween: 20,
  slidesPerView: 1.8,
  centeredSlides: true,
  loop: true,
  grabCursor: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    400: {
      slidesPerView: 2.2,
    },
    580: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

// scroll
const summary = document.querySelector(".section-summary");
const price = document.querySelector(".section-price");
const support = document.querySelector(".support");
const menu = document.querySelector(".section-menu");

let supportAnimated = false;

window.addEventListener("scroll", () => {
  const summaryBottom = summary.offsetTop + summary.offsetHeight;
  const menuBottom = menu.offsetTop + menu.offsetHeight;

  if (window.scrollY >= menuBottom / 2) {
    price.classList.add("section-price--show");
    support.classList.add("support--show");
  } else {
    price.classList.remove("section-price--show");
    support.classList.remove("support--show");
  }

  const priceMiddle = price.offsetTop + price.offsetHeight;
  const viewportMiddle = window.scrollY + window.innerHeight / 1.1;

  if (viewportMiddle >= priceMiddle) {
    support.classList.add("support--transform");
  } else {
    support.classList.remove("support--transform");
  }

  const pageMiddle = document.documentElement.scrollHeight / 2;

  const isDesktop = window.matchMedia("(min-width: 1090px)").matches;

  if (
    isDesktop &&
    window.scrollY + window.innerHeight >= pageMiddle &&
    !supportAnimated
  ) {
    support.classList.add("support--shake");

    supportAnimated = true;

    setTimeout(() => {
      support.classList.remove("support--shake");
    }, 600);
  }
});

// active menu
const menuItems = document.querySelectorAll(".section-menu__item");
const sections = document.querySelectorAll("main section[id]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        menuItems.forEach((item) => {
          item.classList.remove("section-menu__item--active");
        });

        const activeItem = document.querySelector(
          `.section-menu__item a[href="#${entry.target.id}"]`,
        )?.parentElement;

        activeItem?.classList.add("section-menu__item--active");
      }
    });
  },
  {
    threshold: 0.4,
  },
);

sections.forEach((section) => observer.observe(section));

// questions smooth animation
const questionDetails = document.querySelectorAll(
  ".section-questions__details",
);

questionDetails.forEach((detail) => {
  const summary = detail.querySelector("summary");
  const answer = detail.querySelector(".section-questions__details-text");

  summary.addEventListener("click", (event) => {
    event.preventDefault();

    if (detail.classList.contains("section-questions__details--open")) {
      detail.classList.remove("section-questions__details--open");
      answer.style.maxHeight = "0px";
      answer.addEventListener(
        "transitionend",
        () => {
          detail.open = false;
        },
        { once: true },
      );
      return;
    }

    detail.open = true;
    detail.classList.add("section-questions__details--open");
    answer.style.maxHeight = `${answer.scrollHeight}px`;
  });
});

// topics smooth animation

const topicDetails = document.querySelectorAll(".section-topics__details");

topicDetails.forEach((detail) => {
  const summary = detail.querySelector("summary");
  const list = detail.querySelector(".section-topics__details-list");

  summary.addEventListener("click", (event) => {
    event.preventDefault();

    if (detail.classList.contains("section-topics__details--open")) {
      detail.classList.remove("section-topics__details--open");
      list.style.maxHeight = "0px";
      list.addEventListener(
        "transitionend",
        () => {
          detail.open = false;
        },
        { once: true },
      );
      return;
    }

    detail.open = true;
    detail.classList.add("section-topics__details--open");
    list.style.maxHeight = `${list.scrollHeight}px`;
  });
});

// comments swiper
document.addEventListener("DOMContentLoaded", function () {
  const commentsData = [
    {
      name: "کیان بابان (ساکن کانادا)",

      role: "دانشجوی جاوااسکریپت و ریکت",

      video: "https://botostart.com/comments/kian-baban.mov",

      poster: "https://botostart.com/comments/kian-baban.png",

      text: "من در دوره های HTML&CSS و جاوااسکریپت و ریکت سایت بوتواستارت شرکت کردم و تونستم تو کمتر از چهار ماه بدون هیچ پیشینه‌ای در زمینه فرانت اند به تسلط خوبی برسم.",
    },

    {
      name: "سورنا گنجی",

      role: "دانشجوی جاوااسکریپت و ریکت",

      video: "https://botostart.com/comments/sorena-ganji.mov",

      poster: "https://botostart.com/comments/sorena-ganji.png",

      text: "این دوره، اولین انتخاب من نبود ولی وقتی بقیه دوره هارو رصد کردم دیدم مثل این دوره تو دوره های فارسی اصلا نیست. مباحث خیلی کامل و جامع گفته شده و پشتیبانی خیلی خوبی داره. یکی از خوبی‌های استاد اینه که مباحث پیچیده رو خیلی ساده توضیح میدن و تو مراحل مصاحبه هم همراهم بودن.",
    },

    {
      name: "سمیرا فرخ نژاد (ساکن استرالیا)",

      role: "دانشجوی جاوااسکریپت و ریکت",

      video: "https://botostart.com/comments/samira-farokhnezhad.mov",

      poster: "https://botostart.com/comments/samira-farokhnezhad.png",

      text: "من سه ماه پیش دوره های ریکت و جاوااسکریپت سایت بوتواستارت رو شرکت کردم، پشتیبانی دوره واقعا عالی بود. از لحظه به لحظه دوره لذت بردم و الانم منجر به کار پیدا کردن من شد.",
    },
  ];

  const wrapper = document.querySelector(".comments__slider .swiper-wrapper");

  commentsData.forEach((comment) => {
    const slide = document.createElement("div");

    slide.className = "swiper-slide";

    slide.innerHTML = `
      <div class="comments__card">
        <!-- Video -->
        <div class="comments__video">
          <video
            src="${comment.video}"
            poster="${comment.poster}"
            controls
            playsinline
            preload="metadata"
            class="my-video"
          ></video>
        </div>
        <!-- Content -->
        <div class="comments__content">
          <!-- Student -->
          <div class="comments__student">
            <div class="comments__student-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                fill="#7151ee"
                stroke="#7151ee"
                stroke-width="0"
                viewBox="0 0 465.2 465.2"
              >
                <path
                 stroke="none"
                 d="M255.2 26.4q-2-.4-3.6-.3-3.5-1.6-8-1.1C157.8 37.1 78 70.8 6.4 119.2c-10.4 7-6.6 20.8 1.7 25q1.5 3.4 5.2 5.8a356 356 0 0 0 78.2 36.5 28 28 0 0 0-.6 5.6v.6q-1 2-1.4 5c-2.6 26.2-4 52.5-2.7 78.9.4 8.7 7.1 13.1 13.9 13.3q24 12 49.4 19l4.2 59.8c-19.8 10.5-30 28.7-25.9 50.6 0 4.7 2.6 9.2 6.8 12a54 54 0 0 0 34.7 8.7h.3q2.4.2 4.7-.5a47 47 0 0 0 30.5-24.3q1.5-3.5 1.6-7 1.6-2.9 1.7-7a39 39 0 0 0-11.7-28.4q-6.8-6-15.3-8.3l-3.5-49.1A293 293 0 0 0 379 278.9q4.4-2.7 5.8-6.7 3.6-3.2 3.8-9.5c0-23.5.1-47 1.4-70.6q0-2.2-.3-4l.3-3v-6.9l-.1-1q33.1-13.3 65.3-30c4-2 6-5 6.7-8.3 4.1-4.9 5-12-1.1-17.5-58-51.7-130.8-78.4-205.6-95m-141 239.4q-.7-33.9 3-67.8.8-1.7 1-3.6 12 3.2 23.8 5.6l5.8 79.5a254 254 0 0 1-33.7-13.7m64.7 128.1.8 1.4.9 2.5.2 1v2.5l.1.6a39 39 0 0 1-2.8 4.9l-2.3 2.1-.4.3-3.2 1.9-1.8.8-1.6.5c-5.1.5-9.5-.2-14-2-.3-8.6 5.3-13.6 13.7-18q1.6-.8 2.7-1.9l2.2.4 2.3.8 2.2 1.3zm183.4-201.8c-1.2 21.7-1.3 43.4-1.4 65a266 266 0 0 1-184.9 30l-6-81.8a885 885 0 0 0 81.5 9 548 548 0 0 0 111-26.8l.4 1.4q-.5 1.5-.6 3.2m-110.8-5.5-1.2.2-1.6-.2a856 856 0 0 1-71.2-8q31-28.6 63-55.6c13.7-11.6-6-31-19.6-19.6a1922 1922 0 0 0-74.3 66q-1.9 1.1-3.2 2.7c-37-8.2-72.8-20.6-106.2-40A542 542 0 0 1 246 52.5l1.8.6C312.2 67.4 376 89 428 130.1c-55.9 27.5-114.4 48.4-176.5 56.5"
                />
              </svg>
            </div>
            <div class="comments__student-meta">
              <h3 class="comments__student-name">
                ${comment.name}
              </h3>
              <p class="comments__student-role">
                ${comment.role}
              </p>
            </div>
          </div>
          <!-- Comment -->
          <p class="comments__text">
            ${comment.text}
          </p>
        </div>
      </div>
    `;

    wrapper.appendChild(slide);
  });

  const swiperComments = new Swiper(".comments__slider", {
    loop: true,

    speed: 800,

    effect: "fade",

    fadeEffect: {
      crossFade: true,
    },

    pagination: {
      el: ".comments__pagination",

      clickable: true,

      bulletClass: "swiper-pagination-bullet",

      bulletActiveClass: "swiper-pagination-bullet-active",
    },

    navigation: {
      nextEl: ".comments__button--next",

      prevEl: ".comments__button--prev",
    },
  });
});
