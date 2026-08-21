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
    description: 'Комфортний будинок для родини або великої компанії з 5 номерами, вітальнею, кухнею та 2 ванними кімнатами.',
    details: ['5 номерів', 'Вітальня', 'Кухня', '2 ванні кімнати', 'Краєвид на гори'],
    images: ['./images/forward_house.jpg', './images/interior_entryway.jpg', './images/corridor_between_the_rooms.jpg'],
  },
  {
    title: 'Делюкс',
    description: 'Світлий двомісний номер із власною атмосферою, зручним ліжком та усім необхідним для спокійного відпочинку.',
    details: ['2 гості', 'Затишний інтер’єр', 'Телевізор', 'Власні зручності', 'Вид на природу'],
    images: ['./images/deluxe_room_1.jpg'],
  },
  {
    title: 'Люкс',
    description: 'Просторий номер у дерев’яному стилі з великим ліжком, окремою зоною відпочинку та гуцульським характером.',
    details: ['2 гості', 'Велике ліжко', 'Зона відпочинку', 'Телевізор', 'Окремі зручності'],
    images: ['./images/lux_room_1.jpg', './images/lux_room_2.jpg'],
  },
  {
    title: 'Стандартні номери',
    description: 'Комфортні номери для тих, хто приїхав насолодитися горами, тишею та гостинністю садиби.',
    details: ['Зручні ліжка', 'Світлі інтер’єри', 'Телевізор', 'Сімейна атмосфера', 'Доступ до спільних зон'],
    images: ['./images/standard_room_1.jpg', './images/standard_room_2.jpg', './images/standard_another_room_1.jpg', './images/standard_another_room_2.jpg'],
  },
];

const retreatCollections = [
  {
    title: 'Чан на дровах',
    description: 'Теплий вечір під відкритим небом, вода, вогонь і краєвиди Карпат.',
    images: ['./images/hot_tub_1.jpg', './images/hot_tub_2.jpg', './images/hot_tub_3.jpg'],
  },
  {
    title: 'Сауна та кімната відпочинку',
    description: 'Сауна з підсвіткою, басейном і простором, де можна повністю перезавантажитися.',
    images: ['./images/sauna_1.jpg', './images/sauna_2.jpg', './images/sauna_3.jpg', './images/sauna_4.jpg'],
  },
];

const stats = [
  { value: '5', label: 'номерів у будинку' },
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
      { className: 'large', image: './images/gazebo_1.jpg' },
      { className: 'medium', image: './images/gazebo_2.jpg' },
      { className: 'small', image: './images/another_gazebo_1.jpg' },
      { className: 'medium', image: './images/nature.jpg' },
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
                «Садиба у Курила» з сауною та чаном на дровах – це відпочинковий комплекс у мальовничих Карпатах в Івано-Франківській області.
              </p>
              <p>
                З вікон відкривається неймовірний краєвид на гори. У самому серці Гуцульщини ви можете відпочити з компанією друзів чи сім'єю у будинку з 5 номерами, вітальнею, кухнею та 2 ванними кімнатами.
              </p>
            </div>
            <div className="about-text-block accent">
              <p>
                На додачу пропонується двомісний номер з терасою та всіма зручностями. Окрім чавунного чану та сауни, гості можуть провести відпочинок на природі, адже у вашому користуванні є 2 альтанки, гойдалка та велика територія.
              </p>
            </div>
          </div>

          <div className="story-stats">
            {[
              { value: '5', label: 'комфортабельних номерів' },
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
            <p className="eyebrow">Номери та проживання</p>
            <h2>Комфорт, природа та простір для всієї компанії.</h2>
          </div>

          <div className="room-layout">
            {roomCards.map((room, index) => (
              <article key={room.title} className={`room-card card-${index + 1}`}>
                <div className="room-media">
                  <img src={room.images[roomImageIndexes[room.title] || 0]} alt={room.title} />
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
                Після активного дня в горах найкраще розслабитися у просторому чавунному чану, підпаленому дровами, та відчути тепло, яке наповнює душу спокоєм.
              </p>
              <div className="check-list">
                <div><Flame size={18} /> Чан на дровах</div>
                <div><Bath size={18} /> Сауна для відновлення</div>
                <div><Sun size={18} /> Невимушений вечір під зорями</div>
              </div>
            </div>
            <div className="hot-tub-visual">
              <img src="./images/hot_tub_3.jpg" alt="Чан на дровах у Карпатах" />
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
              <li><a href="tel:+380668488057">+380 66 8488 057</a></li>
              <li><a href="mailto:sadibaukurila@gmail.com">sadibaukurila@gmail.com</a></li>
              <li>село Брустури, Косівський район, Івано-Франківська область</li>
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
