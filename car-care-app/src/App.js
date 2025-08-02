import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

const products = [
  {
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "شیشه شور ماشین",
    description: "تمیزی و شفافیت بی‌نظیر برای شیشه‌های خودروی شما."
  },
  {
    image: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "اسپری داشبورد",
    description: "محافظت و درخشندگی داشبورد با ماندگاری بالا."
  },
  {
    image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "واکس تایر",
    description: "تایرهای براق و مشکی، درست مثل روز اول."
  },
  {
    image: "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "سایر محصولات",
    description: "مجموعه‌ای کامل از محصولات برای مراقبت از تمام بخش‌های خودرو."
  }
];

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <section id="hero" style={{backgroundImage: `linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.7)), url('https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
            <h2>کیفیت و درخشش برای خودروی شما</h2>
            <p>بهترین محصولات مراقبت از خودرو، ساخته شده با تکنولوژی روز دنیا</p>
        </section>
        <section id="products">
          <h2>محصولات ما</h2>
          <div className="product-grid">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                description={product.description}
              />
            ))}
          </div>
        </section>
        <section id="about">
            <h2>درباره ما</h2>
            <p>ما یک برند تخصصی در زمینه تولید محصولات شوینده و مراقبتی خودرو هستیم. هدف ما ارائه محصولاتی با کیفیت بالا برای حفظ زیبایی و ارزش خودروی شماست. تمامی محصولات ما با فرمولاسیون ویژه و سازگار با محیط زیست تولید می‌شوند.</p>
        </section>
        <section id="contact">
            <h2>تماس با ما</h2>
            <p>برای سفارش محصولات یا دریافت اطلاعات بیشتر، با ما در تماس باشید.</p>
            <p>ایمیل: info@yourbrand.com</p>
            <p>تلفن: 021-12345678</p>
        </section>
      </main>
      <footer>
        <p>&copy; 1403 | تمامی حقوق برای [نام برند شما] محفوظ است.</p>
      </footer>
    </div>
  );
}

export default App;
