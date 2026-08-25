import {
  ArrowRight,
  Bath,
  BedDouble,
  ChevronDown,
  Compass,
  Facebook,
  Flame,
  House,
  Instagram,
  MapPin,
  Menu,
  Mountain,
  ParkingCircle,
  Phone,
  Sparkles,
  Trees,
  Wifi,
  X,
  Camera,
  CalendarDays,
  Mail,
  Map,
  Check,
  Star,
  Users,
  Car,
  PartyPopper,
  Clock3,
  ExternalLink,
  Trees as TreesIcon,
  MountainSnow,
  UtensilsCrossed,
  Building2,
  Dumbbell,
  TentTree,
  ShieldCheck,
  CameraIcon,
  Play,
  Waves,
  Sun,
  MessageCircle,
  Quote,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const navItems = [
  { label: 'Головна', href: '#home' },
  { label: 'Про нас', href: '#about' },
  { label: 'Номери', href: '#rooms' },
  { label: 'Відпочинок', href: '#retreat' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Контакти', href: '#contact' },
];

const featureList = [
  { icon: Mountain, label: 'Краєвид на Карпати' },
  { icon: Flame, label: 'Чан на дровах' },
  { icon: Bath, label: 'Сауна' },
  { icon: Waves, label: 'Сезонний відкритий басейн' },
  { icon: TreesIcon, label: 'Сад і тераса' },
  { icon: MountainSnow, label: 'Прямий доступ до лижних схилів' },
  { icon: TentTree, label: 'Дитячий ігровий майданчик' },
  { icon: Car, label: 'Катання на квадроциклі' },
  { icon: Compass, label: 'Уроки їзди на квадроциклі' },
  { icon: Wifi, label: 'Безкоштовний Wi-Fi' },
  { icon: ParkingCircle, label: 'Приватне паркування' },
  { icon: TreesIcon, label: 'Велика територія' },
  { icon: House, label: 'Будинок для компанії' },
  { icon: PartyPopper, label: 'Зала для святкувань' },
];

const galleryImages = [
  './images/photos_of_tourists_1.jpg',
  './images/photos_of_tourists_2.jpg',
  './images/photos_of_tourists_3.jpg',
  './images/photos_of_tourists_4.jpg',
  './images/photos_of_tourists_5.jpg',
];

const socialLinks = [
  { label: 'Booking', href: 'https://www.booking.com/Share-V3WpQGk', icon: CalendarDays },
  { label: 'Instagram', href: 'https://www.instagram.com/_sadiba_u_kyrula?igsh=YXpqNGUyM3ViaGVm', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100075957711640', icon: Facebook },
  { label: 'TikTok', href: 'https://www.tiktok.com/@saduba_y_kyrula?_t=8oyrIBK1SiM&_r=1', icon: Sparkles },
];

const roomCards = [
  {
    title: 'Будинок',
    description: 'Просторий будинок для родини або великої компанії з видом на гори, вітальнею, добре устаткованою кухнею, обідньою зоною та окремими ванними кімнатами.',
    details: ['5 номерів', 'Вітальня', 'Кухня', '2 ванні кімнати', 'Увесь будинок у вашому розпорядженні'],
    images: [
      './images/forward_house.jpg',
      './images/enterance.jpg',
      './images/hall_house.jpg',
      './images/kitchen_in_house.jpg',
      './images/bathroom_house_1.jpg',
      './images/bathroom_house_2.jpg',
      './images/corridor.jpg',
      './images/corridor_on_second_floor_1.jpg',
      './images/corridor_on_second_floor_2.jpg',
      './images/room_in_house_1.jpg',
      './images/room_in_house_2.jpg',
      './images/room_in_house_3.jpg',
      './images/room_in_house_4.jpg',
      './images/room_in_house_5.jpg',
    ],
  },
  {
    title: 'Делюкс',
    description: 'Світлий номер із телевізором із плоским екраном, супутниковим телебаченням, кухнею, обідньою зоною та чудовим видом на природу.',
    details: ['Зручне розміщення', 'Кухня', 'Обідня зона', 'Власна ванна кімната', 'Вид на гори та річку'],
    images: [
      './images/deluxe_room_1.jpg',
      './images/deluxe_room_2.jpg',
      './images/deluxe_room_3.jpg',
      './images/deluxe_room_4.jpg',
      './images/deluxe_room_5.jpg',
    ],
  },
  {
    title: 'Сімейний люкс 1',
    description: 'Просторий сімейний люкс у дерев’яному стилі з великим ліжком, розкладним диваном, кухнею та окремою зоною відпочинку.',
    details: ['2–4 гості', 'Велике ліжко', 'Розкладний диван', 'Телевізор', 'Окремі зручності'],
    images: [
      './images/luxe_room_1_1.jpg',
      './images/luxe_room_1_2.jpg',
      './images/luxe_room_1_3.jpg',
      './images/luxe_room_1_4.jpg',
      './images/luxe_room_1_5.jpg',
    ],
  },
  {
    title: 'Сімейний люкс 2',
    description: 'Окремий сімейний люкс для тих, хто цінує більше простору, тепло натурального дерева та комфортний карпатський відпочинок.',
    details: ['2–4 гості', 'Велике ліжко', 'Розкладний диван', 'Телевізор', 'Окремі зручності'],
    images: [
      './images/luxe_room_2_1.jpg',
      './images/luxe_room_2_2.jpg',
      './images/luxe_room_2_3.jpg',
      './images/luxe_room_2_4.jpg',
      './images/luxe_room_2_5.jpg',
    ],
  },
];

const retreatCollections = [
  {
    title: 'Чан на дровах',
    description: 'Теплий вечір під відкритим небом, вода, вогонь і краєвиди Карпат.',
    images: [
      './images/hot_tub_1.jpg',
      './images/hot_tub_2.jpg',
      './images/hot_tub_3.jpg',
      './images/hot_tub_4.jpg',
      './images/hot_tub_5.jpg',
      './images/hot_tub_6.jpg',
      './images/hot_tub_7.jpg',
    ],
  },
  {
    title: 'Сауна та кімната відпочинку',
    description: 'Сауна з підсвіткою, басейном і простором, де можна повністю перезавантажитися.',
    images: [
      './images/sauna_1.jpg',
      './images/sauna_2.jpg',
      './images/sauna_3.jpg',
      './images/sauna_4.jpg',
      './images/sauna_5.jpg',
      './images/sauna_6.jpg',
      './images/sauna_7.jpg',
      './images/sauna_8.jpg',
      './images/sauna_9.jpg',
      './images/sauna_10.jpg',
      './images/bathroom_in_sauna.jpg',
    ],
  },
];

const eventImages = [
  './images/banket_hall_1.jpg',
  './images/banket_hall_2.jpg',
  './images/banket_hall_3.jpg',
];

const stats = [
  { value: '8', label: 'номерів' },
  { value: '2', label: 'альтанки для відпочинку' },
  { value: '1', label: 'чан на дровах' },
  { value: '∞', label: 'вражень від природи' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [roomImageIndexes, setRoomImageIndexes] = useState({});

  const changeRoomImage = (roomTitle, imageCount, direction) => {
    setRoomImageIndexes((current) => {
      const currentIndex = current[roomTitle] || 0;
      const nextIndex = (currentIndex + direction + imageCount) % imageCount;
      return { ...current, [roomTitle]: nextIndex };
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const galleryLayout = useMemo(
    () => [
      { className: 'large', image: './images/gazebo_near_house_1.jpg' },
      { className: 'medium', image: './images/gazebo_near_house_2.jpg' },
      { className: 'small', image: './images/gazebo_near_house_3.jpg' },
      { className: 'medium', image: './images/gazebo_under_river.jpg' },
      { className: 'large', image: './images/swing.jpg' },
      { className: 'small', image: './images/nature_1.jpg' },
      { className: 'medium', image: './images/nature_2.jpg' },
      { className: 'small', image: './images/nature_3.jpg' },
      { className: 'medium', image: './images/territory_1.jpg' },
      { className: 'small', image: './images/territory_2.jpg' },
      { className: 'medium', image: './images/territory_3.jpg' },
      { className: 'small', image: './images/territory_4.jpg' },
      { className: 'small', image: './images/trampoline.jpg' },
      { className: 'medium', image: './images/terrace.jpg' },
    ],
    [],
  );

  return (
    <div className="page-shell">
      <header id="home" className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav container" aria-label="Головна навігація">
          <a href="#home" className="brand" aria-label="Садиба У Курила">
            <span className="brand-mark">У</span>
            <span>Садиба «У Курила»</span>
          </a>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a className="btn btn-primary nav-cta" href="https://www.booking.com/Share-V3WpQGk" target="_blank" rel="noreferrer">
              Забронювати
            </a>
            <button
              className="menu-button"
              type="button"
              aria-label="Відкрити меню"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-backdrop" />
          <div className="container hero-inner">
            <div className="hero-copy reveal">
              <p className="eyebrow">Відпочинок у серці Карпат</p>
              <h1>Садиба «У Курила»</h1>
              <p className="lead">
                Гори. Тиша. Чан на дровах. Сауна. І справжня атмосфера Гуцульщини.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="https://www.booking.com/Share-V3WpQGk" target="_blank" rel="noreferrer">
                  Забронювати відпочинок
                  <ArrowRight size={18} />
                </a>
                <a className="btn btn-secondary" href="#about">
                  Переглянути садибу
                </a>
              </div>
              <div className="hero-meta">
                <div>
                  <MapPin size={16} />
                  <span>Брустури, Карпати</span>
                </div>
                <div>
                  <Sparkles size={16} />
                  <span>Сауна · Чан · Природа</span>
                </div>
              </div>
            </div>
            <div className="hero-card reveal">
              <div className="mini-card top">
                <div className="icon-wrap"><MountainSnow size={18} /></div>
                <div>
                  <strong>Карпатські краєвиди</strong>
                  <span>Відкрите небо та гірські простори</span>
                </div>
              </div>
              <div className="mini-card bottom">
                <div className="icon-wrap"><Flame size={18} /></div>
                <div>
                  <strong>Чан на дровах</strong>
                  <span>Неймовірна атмосфера вечора</span>
                </div>
              </div>
            </div>
          </div>
          <a className="scroll-indicator" href="#about" aria-label="Перейти до наступного розділу">
            <span>Scroll</span>
            <ChevronDown size={18} />
          </a>
        </section>

        <section id="about" className="about section container reveal">
          <div className="section-heading align-left">
            <p className="eyebrow">Про нас</p>
            <h2>Місце, де гори говорять тихо, а відпочинок залишається з вами надовго.</h2>
          </div>

          <div className="about-grid">
            <div className="about-text-block">
              <p>
                «Садиба у Курила» з сауною та чаном на дровах — це відпочинковий комплекс у мальовничих Карпатах, у Брустурах Івано-Франківської області. У довідниках і маршрутах локацію також можуть позначати як напрямок Шепіт.
              </p>
              <p>
                У розпорядженні гостей номери з видом на гори, сезонний відкритий басейн, сад, спільний лаунж, тераса та прямий доступ до лижних схилів. На території є приватна парковка й безкоштовний Wi-Fi.
              </p>
            </div>
            <div className="about-text-block accent">
              <p>
                Кожен варіант розміщення має телевізор із плоским екраном і супутниковим телебаченням, добре устатковану кухню та обідню зону. Окрема ванна кімната з душем укомплектована феном. Із балкона відкривається чудовий вид на річку, а постільна білизна та рушники надаються за додаткову плату.
              </p>
            </div>
          </div>

          <div className="story-stats">
            {[
              { value: '8', label: 'номерів' },
              { value: '2', label: 'альтанки для спокійних вечорів' },
              { value: '∞', label: 'вражень від гір і тиші' },
            ].map((stat) => (
              <div key={stat.label} className="stat-box">
                <span>{stat.value}</span>
                <small>{stat.label}</small>
              </div>
            ))}
          </div>

          <div className="feature-pills">
            {[
              'Карпати поруч',
              'Затишок для всієї компанії',
              'Чан та сауна',
              'Природа навколо',
              'Сімейний відпочинок',
              'Атмосфера Гуцульщини',
            ].map((item) => (
              <span key={item} className="pill">{item}</span>
            ))}
          </div>
        </section>

        <section className="benefits section">
          <div className="container">
            <div className="section-heading center reveal">
              <p className="eyebrow">Ключові переваги</p>
              <h2>Усе, що потрібно для справжнього гірського відпочинку.</h2>
            </div>

            <div className="feature-grid reveal">
              {featureList.map(({ icon: Icon, label }) => (
                <div key={label} className="feature-item">
                  <div className="feature-icon"><Icon size={24} /></div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="rooms" className="rooms section container reveal">
          <div className="section-heading align-left">
            <p className="eyebrow">Номери</p>
            <h2>Комфорт, природа та простір для всієї компанії.</h2>
          </div>

          <div className="room-layout">
            {roomCards.map((room, index) => (
              <article key={room.title} className={`room-card card-${index + 1}`}>
                <div className="room-media">
                  <img
                    key={`${room.title}-${roomImageIndexes[room.title] || 0}`}
                    src={room.images[roomImageIndexes[room.title] || 0]}
                    alt={room.title}
                  />
                  <span className="room-tag">{room.title}</span>
                  {room.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        className="room-arrow room-arrow-left"
                        onClick={() => changeRoomImage(room.title, room.images.length, -1)}
                        aria-label={`Попереднє фото: ${room.title}`}
                      >
                        <ChevronLeft size={22} />
                      </button>
                      <button
                        type="button"
                        className="room-arrow room-arrow-right"
                        onClick={() => changeRoomImage(room.title, room.images.length, 1)}
                        aria-label={`Наступне фото: ${room.title}`}
                      >
                        <ChevronRight size={22} />
                      </button>
                      <div className="room-counter">
                        {(roomImageIndexes[room.title] || 0) + 1} / {room.images.length}
                      </div>
                    </>
                  )}
                </div>
                <div className="room-content">
                  <div className="room-label">{room.title}</div>
                  <h3>{room.title}</h3>
                  <p>{room.description}</p>
                  <ul>
                    {room.details.map((detail) => (
                      <li key={detail}><Check size={16} />{detail}</li>
                    ))}
                  </ul>
                  <a className="btn btn-primary" href="https://www.booking.com/Share-V3WpQGk" target="_blank" rel="noreferrer">
                    Забронювати
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="retreat" className="hot-tub section reveal">
          <div className="container hot-tub-grid">
            <div className="hot-tub-copy">
              <p className="eyebrow">Відпочинок, який запам'ятовується</p>
              <h2>Чавунний чан на дровах та сауна серед карпатської природи.</h2>
              <p>
                Після дня на лижних схилах або прогулянки Карпатами можна розслабитися у чавунному чані, відвідати сауну чи сезонний відкритий басейн і насолодитися тишею природи.
              </p>
              <div className="check-list">
                <div><Flame size={18} /> Чан на дровах</div>
                <div><Bath size={18} /> Сауна для відновлення</div>
                <div><Sun size={18} /> Сезонний відкритий басейн</div>
                <div><MountainSnow size={18} /> Катання на лижах поруч</div>
              </div>
            </div>
            <div className="hot-tub-visual">
              <img src="./images/genertal_chan_sauna.jpg" alt="Чан і сауна у Карпатах" />
            </div>
          </div>
          <div className="container retreat-collections">
            {retreatCollections.map((collection) => (
              <article key={collection.title} className="retreat-collection">
                <div>
                  <p className="eyebrow">Відпочинок</p>
                  <h3>{collection.title}</h3>
                  <p>{collection.description}</p>
                </div>
                <div className="retreat-photo-grid">
                  {collection.images.map((image) => (
                    <button key={image} type="button" onClick={() => setActiveImage(image)} aria-label={`Відкрити фото: ${collection.title}`}>
                      <img src={image} alt={collection.title} />
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="territory section container reveal">
          <div className="section-heading align-left">
            <p className="eyebrow">Територія</p>
            <h2>Простір для вашого відпочинку.</h2>
          </div>

          <div className="territory-topline">
            <div>
              <p>2 альтанки · гойдалка · велика територія · спокій і краєвиди</p>
            </div>
            <a className="inline-link" href="#gallery">Подивитися атмосферу</a>
          </div>

          <div className="masonry-grid">
            {galleryLayout.map((item, index) => (
              <div key={`${item.image}-${index}`} className={`masonry-item ${item.className}`}>
                <img src={item.image} alt="Територія садиби" />
              </div>
            ))}
          </div>
        </section>

        <section className="event-space section reveal">
          <div className="container event-inner">
            <div className="event-image">
              <img src="./images/banket_hall_2.jpg" alt="Просторий відпочинковий зал для компаній" />
              <div className="event-photo-strip">
                {eventImages.map((image) => (
                  <button key={image} type="button" onClick={() => setActiveImage(image)} aria-label="Відкрити фото залу">
                    <img src={image} alt="Фото відпочинкового залу" />
                  </button>
                ))}
              </div>
            </div>
            <div className="event-copy">
              <p className="eyebrow">Для великих компаній та святкувань</p>
              <h2>Просторий відпочинковий зал, де справжні зустрічі стають особливими.</h2>
              <p>
                У комплексі є просторий відпочинковий зал, де можна провести святкування, зустріч із друзями або просто провести вечір великою компанією.
              </p>
              <a className="btn btn-primary" href="#contact">Зв'язатися</a>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery section container reveal">
          <div className="section-heading center">
            <p className="eyebrow">Галерея</p>
            <h2>Історії відпочинку в Карпатах.</h2>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <button
                key={image}
                type="button"
                className={`gallery-item item-${index % 4}`}
                onClick={() => setActiveImage(image)}
                aria-label="Відкрити фото"
              >
                <img src={image} alt="Садиба У Курила" />
              </button>
            ))}
          </div>
        </section>

        <section className="atmosphere section">
          <div className="atmosphere-visual">
            <div className="atmosphere-overlay"></div>
            <div className="container atmosphere-copy reveal">
              <p className="eyebrow">Там, де гори починаються за порогом</p>
              <h2>Брустури · Косівський район · Івано-Франківська область</h2>
            </div>
          </div>
        </section>

        <section className="booking-cta section container reveal">
          <div className="cta-panel">
            <div>
              <p className="eyebrow">Бронювання</p>
              <h2>Ваш відпочинок у Карпатах починається тут.</h2>
            </div>
            <p>Оберіть дати та забронюйте проживання у «Садибі У Курила».</p>
            <a className="btn btn-primary" href="https://www.booking.com/Share-V3WpQGk" target="_blank" rel="noreferrer">
              Забронювати на Booking.com
            </a>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div>
            <a href="#home" className="brand footer-brand">
              <span className="brand-mark">У</span>
              <span>Садиба «У Курила»</span>
            </a>
            <p>Відпочинок у серці Карпат.</p>
          </div>

          <div>
            <h3>Навігація</h3>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Контакти</h3>
            <ul>
              <li><a href="tel:+380979893151">+380 97 9893 151</a></li>
              <li><a href="tel:+380985135466">+380 98 5135 466</a></li>
              <li><a href="mailto:sadibaukurila@gmail.com">sadibaukurila@gmail.com</a></li>
              <li>
                <a href="https://maps.app.goo.gl/vVvFUuJumJGuoyHn7" target="_blank" rel="noreferrer">
                  село Брустури, Косівський район, Івано-Франківська область
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Соціальні мережі</h3>
            <ul className="social-list">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}><a href={href} target="_blank" rel="noreferrer"><Icon size={16} /> {label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 Садиба «У Курила». Всі права захищені.</p>
        </div>
      </footer>

      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <button type="button" className="lightbox-close" onClick={() => setActiveImage(null)} aria-label="Закрити фото">
            <X size={22} />
          </button>
          <img src={activeImage} alt="Садиба У Курила" />
        </div>
      )}
    </div>
  );
}

export default App;
