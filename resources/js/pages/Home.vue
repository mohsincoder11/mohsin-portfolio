<template>

  <Header :name="my_info.name" />

  <main class="main">

    <!-- Hero Section -->
    <section id="hero" class="hero section dark-background">

      <img :src="`${asset_path}assets/img/hero-bg.jpg`" alt="" data-aos="fade-in" class="">

      <div :class="class_name" data-aos="fade-up" data-aos-delay="100">
        <h2>{{ my_info.name }}</h2>
        <p>I'm <span class="typed" data-typed-items="Web Developer,PHP Developer,Laravel Developer">Coder</span><span
            class="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span
            class="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
      </div>

    </section><!-- /Hero Section -->

    <!-- About Section -->
    <section id="about" class="about section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          I am <strong>{{ my_info.name }}</strong>, a <strong>Lead Full-Stack Developer</strong> with over
          <strong>5 years of experience</strong> specializing in <strong>Laravel, Vue.js, REST APIs</strong>,
          and <strong>database optimization</strong>. I have a proven track record of building scalable web
          applications,
          leading development teams, and delivering innovative digital solutions that drive business growth.
        </p>
      </div>
      <!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4 justify-content-center">
          <div class="col-lg-4">
            <img :src="`${asset_path}assets/img/my-profile-img.jpg`" class="img-fluid" alt="">
          </div>
          <div class="col-lg-8 content">
            <h2>Lead Full-Stack Developer</h2>
            <p class="fst-italic py-3">
              Passionate about building scalable web applications with Laravel, Vue.js, and modern web technologies.
              Experienced in API development, database optimization, and leading development teams.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>April 11, 1995</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.mohsinshaikh.dev</span>
                  </li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{{ my_info.mobile }}</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Amravati, Maharashtra</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>29</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor's in Computer
                      Science</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{{ my_info.email }}</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p class="py-3">
              Experienced in developing enterprise-grade applications, integrating third-party services,
              and optimizing backend performance. Skilled in leading teams and delivering high-quality software
              solutions.
            </p>
          </div>

        </div>

      </div>

    </section><!-- /About Section -->

    <!-- Stats Section -->
    <section id="stats" class="stats section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">

          <div class="col-lg-3 col-md-6">
            <div class="stats-item">
              <i class="bi bi-emoji-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1"
                class="purecounter"></span>
              <p><strong>Happy Clients</strong> <span>Freelance & agency projects</span></p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item">
              <i class="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="40" data-purecounter-duration="1"
                class="purecounter"></span>
              <p><strong>Projects</strong> <span>Completed across various stacks</span></p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item">
              <i class="bi bi-headset"></i>
              <span data-purecounter-start="0" data-purecounter-end="7000" data-purecounter-duration="1"
                class="purecounter"></span>
              <p><strong>Hours of Coding</strong> <span>Frontend & backend development</span></p>
            </div>
          </div><!-- End Stats Item -->

          <div class="col-lg-3 col-md-6">
            <div class="stats-item">
              <i class="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="1"
                class="purecounter"></span>
              <p><strong>Team Collaborations</strong> <span>Worked with dev teams & designers</span></p>
            </div>
          </div><!-- End Stats Item -->

        </div>
      </div>

    </section>
    <!-- /Stats Section -->

    <!-- Skills Section -->
    <section id="skills" class="skills section light-background">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Expertise in backend and frontend development, database management, and API integrations.</p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row skills-content skills-animation">

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill"><span>Laravel</span> <i class="val">95%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>PHP</span> <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>Vue.js</span> <i class="val">85%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>React.js</span> <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

          </div>

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill"><span>REST APIs</span> <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>MySQL / PostgreSQL</span> <i class="val">85%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>Git & Version Control</span> <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

            <div class="progress">
              <span class="skill"><span>API Testing (Postman)</span> <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                </div>
              </div>
            </div><!-- End Skills Item -->

          </div>

        </div>

      </div>

    </section>
    <!-- /Skills Section -->

    <!-- Resume Section -->
    <section id="resume" class="resume section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>Passionate and results-driven Laravel & Vue.js Developer with expertise in full-stack development, API
          integrations, and scalable web applications. Adept at leading development projects and optimizing performance.
        </p>
      </div><!-- End Section Title -->

      <div class="container">

        <div class="row">

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">Summary</h3>

            <div class="resume-item pb-0">
              <h4>{{ my_info.name }}</h4>
              <p><em>Experienced Laravel & Vue.js Developer with a strong background in building scalable applications,
                  crafting optimized APIs, and leading software development projects. Proficient in PHP, JavaScript, and
                  modern web technologies.</em></p>
              <ul>
                <li>Amravati, Maharashtra</li>
                <li>{{ my_info.mobile }}</li>
                <li>{{ my_info.email }}</li>
              </ul>
            </div><!-- End Resume Item -->

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Bachelor's in Computer Science</h4>
              <h5>2015 - 2019</h5>
              <p><em>Amravati University, Maharashtra</em></p>
              <p>Gained expertise in software development, web technologies, and database management, with hands-on
                experience in building web applications.</p>
            </div><!-- End Resume Item -->

          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 class="resume-title">Professional Experience</h3>

            <div class="resume-item">
              <h4>Senior Laravel & Vue.js Developer</h4>
              <h5>2021 - Present</h5>
              <p><em>Nyusoft Solutions LLP, India</em></p>
              <ul>
                <li>Developed and optimized enterprise-grade Laravel applications.</li>
                <li>Designed and integrated scalable REST APIs for web and mobile apps.</li>
                <li>Implemented real-time features using Firebase and WebSockets.</li>
                <li>Led a team of developers to deliver high-quality web solutions.</li>
              </ul>
            </div><!-- End Resume Item -->

            <div class="resume-item">
              <h4>Full-Stack Developer</h4>
              <h5>2019 - 2021</h5>
              <p><em>WebMedia Pvt. Ltd.</em></p>
              <ul>
                <li>Built and maintained web applications using Laravel, Vue.js, and React.</li>
                <li>Worked on CRM and CMS development for business automation.</li>
                <li>Integrated third-party APIs and payment gateways.</li>
                <li>Optimized database queries and improved application performance.</li>
              </ul>
            </div><!-- End Resume Item -->

          </div>

        </div>

      </div>

    </section>
    <!-- /Resume Section -->

    <!-- Portfolio Section -->
    <section id="portfolio" class="portfolio section light-background" v-if="1>2">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
          in iste officiis commodi quidem hic quas.</p>
      </div><!-- End Section Title -->

      <div class="container">

        <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" class="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Product</li>
            <li data-filter=".filter-branding">Branding</li>
            <li data-filter=".filter-books">Books</li>
          </ul><!-- End Portfolio Filters -->

          <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div class="portfolio-content h-100">
                <img :src="`${asset_path}assets/img/portfolio/app-1.jpg`" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>App 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a :href="`${asset_path}assets/img/portfolio/app-1.jpg`" title="App 1"
                    data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i
                      class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div class="portfolio-content h-100">
                <img :src="`${asset_path}assets/img/portfolio/product-1.jpg`" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>Product 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a :href="`${asset_path}assets/img/portfolio/product-1.jpg`" title="Product 1"
                    data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i
                      class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div class="portfolio-content h-100">
                <img :src="`${asset_path}assets/img/portfolio/branding-1.jpg`" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>Branding 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a :href="`${asset_path}assets/img/portfolio/branding-1.jpg`" title="Branding 1"
                    data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i
                      class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div class="portfolio-content h-100">
                <img :src="`${asset_path}assets/img/portfolio/books-1.jpg`" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>Books 1</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a :href="`${asset_path}assets/img/portfolio/books-1.jpg`" title="Branding 1"
                    data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i
                      class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div class="portfolio-content h-100">
                <img :src="`${asset_path}assets/img/portfolio/app-2.jpg`" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>App 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a :href="`${asset_path}assets/img/portfolio/app-2.jpg`" title="App 2"
                    data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i
                      class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div class="portfolio-content h-100">
                <img :src="`${asset_path}assets/img/portfolio/product-2.jpg`" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>Product 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a :href="`${asset_path}assets/img/portfolio/product-2.jpg`" title="Product 2"
                    data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i
                      class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div class="portfolio-content h-100">
                <img :src="`${asset_path}assets/img/portfolio/branding-2.jpg`" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>Branding 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a :href="`${asset_path}assets/img/portfolio/branding-2.jpg`" title="Branding 2"
                    data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i
                      class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div class="portfolio-content h-100">
                <img :src="`${asset_path}assets/img/portfolio/books-2.jpg`" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>Books 2</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a :href="`${asset_path}assets/img/portfolio/books-2.jpg`" title="Branding 2"
                    data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i
                      class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div class="portfolio-content h-100">
                <img :src="`${asset_path}assets/img/portfolio/app-3.jpg`" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>App 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a :href="`${asset_path}assets/img/portfolio/app-3.jpg`" title="App 3"
                    data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i
                      class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
              <div class="portfolio-content h-100">
                <img :src="`${asset_path}assets/img/portfolio/product-3.jpg`" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>Product 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a :href="`${asset_path}assets/img/portfolio/product-3.jpg`" title="Product 3"
                    data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i
                      class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
              <div class="portfolio-content h-100">
                <img :src="`${asset_path}assets/img/portfolio/branding-3.jpg`" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>Branding 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a :href="`${asset_path}assets/img/portfolio/branding-3.jpg`" title="Branding 2"
                    data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i
                      class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

            <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
              <div class="portfolio-content h-100">
                <img :src="`${asset_path}assets/img/portfolio/books-3.jpg`" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>Books 3</h4>
                  <p>Lorem ipsum, dolor sit amet consectetur</p>
                  <a :href="`${asset_path}assets/img/portfolio/books-3.jpg`" title="Branding 3"
                    data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i
                      class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i
                      class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div><!-- End Portfolio Item -->

          </div><!-- End Portfolio Container -->

        </div>

      </div>

    </section><!-- /Portfolio Section -->

    <!-- Services Section -->
    <section id="services" class="services section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Providing high-quality web solutions with expertise in Laravel, Vue.js, and full-stack development. From API
          integrations to scalable web applications, I deliver robust and efficient digital solutions.</p>
      </div><!-- End Section Title -->

      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div class="icon flex-shrink-0"><i class="bi bi-code-slash"></i></div>
            <div>
              <h4 class="title"><a href="#" class="stretched-link">Web Development</a></h4>
              <p class="description">Building modern, responsive, and scalable web applications using Laravel, Vue.js,
                and React.</p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div class="icon flex-shrink-0"><i class="bi bi-terminal"></i></div>
            <div>
              <h4 class="title"><a href="#" class="stretched-link">API Development</a></h4>
              <p class="description">Creating secure and efficient REST & GraphQL APIs for seamless integrations with
                mobile and web applications.</p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <div class="icon flex-shrink-0"><i class="bi bi-cloud-arrow-up"></i></div>
            <div>
              <h4 class="title"><a href="#" class="stretched-link">SaaS Development</a></h4>
              <p class="description">Developing scalable SaaS platforms with multi-tenant architecture using Laravel and
                Vue.js.</p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <div class="icon flex-shrink-0"><i class="bi bi-database"></i></div>
            <div>
              <h4 class="title"><a href="#" class="stretched-link">Database Optimization</a></h4>
              <p class="description">Enhancing database performance by optimizing queries, indexing, and implementing
                caching strategies.</p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
            <div class="icon flex-shrink-0"><i class="bi bi-shield-lock"></i></div>
            <div>
              <h4 class="title"><a href="#" class="stretched-link">Security & Authentication</a></h4>
              <p class="description">Implementing robust authentication, authorization, and security best practices for
                web applications.</p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
            <div class="icon flex-shrink-0"><i class="bi bi-tools"></i></div>
            <div>
              <h4 class="title"><a href="#" class="stretched-link">Custom Laravel Packages</a></h4>
              <p class="description">Developing reusable Laravel packages for CMS, CRM, and other business needs to
                streamline development.</p>
            </div>
          </div><!-- End Service Item -->

        </div>

      </div>

    </section>
    <!-- /Services Section -->

    <!-- Testimonials Section -->
    <section id="testimonials" class="testimonials section light-background">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>See what my clients and colleagues say about my work in web development, APIs, and SaaS solutions.</p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">


        <div class="swiper-container">
          <swiper :loop="true" :speed="600" :autoplay="{ delay: 5000 }" :slides-per-view="'auto'"
            :pagination="{ clickable: true }" :breakpoints="{
              320: { slidesPerView: 1, spaceBetween: 40 },
              1200: { slidesPerView: 3, spaceBetween: 1 }
            }">
            <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
              <div class="testimonial-item">
                <p>
                  <i class="bi bi-quote quote-icon-left"></i>
                  <span>{{ testimonial.text }}</span>
                  <i class="bi bi-quote quote-icon-right"></i>
                </p>
                <img :src="testimonial.image" class="testimonial-img" alt="">
                <h3>{{ testimonial.name }}</h3>
                <h4>{{ testimonial.role }}</h4>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination"></div>
        </div>

      </div>

    </section>
    <!-- /Testimonials Section -->

    <!-- Contact Section -->
    <section id="contact" class="contact section">

      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div><!-- End Section Title -->

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4">

          <div class="col-lg-5">

            <div class="info-wrap">
              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Amravati, Maharashtra</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 738 507 8839</p>
                </div>
              </div><!-- End Info Item -->

              <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p> <a href="mailto:mohsinshaikh1104@gmail.com">mohsinshaikh1104@gmail.com</a></p>
                </div>
              </div><!-- End Info Item -->

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d77.7564544!3d20.9303083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjAuOTMwMzA4MywgNzcuNzU2NDU0NA!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                frameborder="0" style="border:0; width: 100%; height: 270px;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
          </div>

          <div class="col-lg-7">
            <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up"
              data-aos-delay="200">
              <div class="row gy-4">

                <div class="col-md-6">
                  <label for="name-field" class="pb-2">Your Name</label>
                  <input type="text" name="name" id="name-field" class="form-control" required="">
                </div>

                <div class="col-md-6">
                  <label for="email-field" class="pb-2">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email-field" required="">
                </div>

                <div class="col-md-12">
                  <label for="subject-field" class="pb-2">Subject</label>
                  <input type="text" class="form-control" name="subject" id="subject-field" required="">
                </div>

                <div class="col-md-12">
                  <label for="message-field" class="pb-2">Message</label>
                  <textarea class="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                </div>

                <div class="col-md-12 text-center">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit">Send Message</button>
                </div>

              </div>
            </form>
          </div><!-- End Contact Form -->

        </div>

      </div>

    </section><!-- /Contact Section -->

  </main>

  <Footer />
  <!-- Scroll Top -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i
      class="bi bi-arrow-up-short"></i></a>

  <!-- Preloader -->
  <div id="preloader"></div>

</template>

<script>
import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Swiper, SwiperSlide
  },
  setup() {
    const testimonials = [
      {
        text: "Working with this team was a fantastic experience. They delivered exactly what we needed, on time and beyond expectations. Highly recommend their services!",
        image: "assets/img/testimonials/testimonials-1.jpg",
        name: "Samuel Graham",
        role: "CEO & Founder, TechNova Inc.",
      },
      {
        text: "Their attention to detail and creativity blew me away. The design work they did completely transformed our brand identity.",
        image: "assets/img/testimonials/testimonials-2.jpg",
        name: "Sarah Wilson",
        role: "Creative Director, PixelForge Studio",
      },
      {
        text: "From start to finish, the process was smooth and professional. They truly understood our vision and brought it to life.",
        image: "assets/img/testimonials/testimonials-3.jpg",
        name: "Jenna Carter",
        role: "Owner, Bloom & Co.",
      },
      {
        text: "Reliable, efficient, and always one step ahead. I'm incredibly happy with the results and would definitely work with them again.",
        image: "assets/img/testimonials/testimonials-4.jpg",
        name: "Matthew Brennan",
        role: "Freelance Developer",
      },
      {
        text: "They’ve been instrumental in helping us scale our operations. Their strategic insight and technical skillset are top-notch.",
        image: "assets/img/testimonials/testimonials-5.jpg",
        name: "Jonathan Larson",
        role: "Entrepreneur, StartSmart Solutions",
      },
    ];


    return {
      testimonials,
      modules: [Navigation, Pagination],
    };



  },
  data() {
    return {
      class_name: "container",
      asset_path: import.meta.env.VITE_ASSET_URL,
      my_info: {
        name: "Mohsin Shaikh",
        email: "mohsinshaikh1104@gmail.com",
        mobile: "+91 7385078839"
      }
    };
  },
  mounted() {

    console.log(this.asset_path);
  },
}
</script>

<style scoped>
.swiper-container {
  position: relative;
  width: 100%;
  padding-bottom: 40px;
}

.testimonial-item {
  text-align: center;
  padding: 20px;
}

.swiper-pagination {
  bottom: 10px;
}
</style>