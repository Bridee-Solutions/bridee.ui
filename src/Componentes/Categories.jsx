import React from 'react';
import styles from '../css/categories.module.css';
import { Link } from 'react-router-dom';
const categories = [
  { name: "Fotos & Vídeo",link: "/", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d16fbfaa55c61f39e7f2abc3b4b40d424b4cc7e027b9633b769604a1ff4f644?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" },
  { name: "Local",link: "/WeddingLocations.jsx", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2c8ee166c90a7107cf8ede227ba7f1f1b3aa83f1175cdfe7ff5f8afab39ea37d?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" },
  { name: "Música",link: "/", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6adecb651f9e19de6f0751f9ff5208dfb195ea3b98e8a906adb14d9bc514bc61?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" },
  { name: "Bolo",link: "/", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a58541887d6dcccc2c4120f50ef2bb2c9e5cadb0cd80224229e836b05876f2e1?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" },
  { name: "Decoração", link: "/", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7fc02fdccc4b3934a74a45eb4bcc157b13f9704836eed444b436ba82d4cd93d?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" },
  { name: "Gastronomia",link: "/", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0bef6ebe5993303c4c9d26fc2847092f4ad2232d06546636fb0cef55b5277900?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" },
  { name: "Noiva",link: "/", imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/385d43a43c197b2e0d4dacbaa2722afb8ff1ee0f049b4ae21cd47fa7cea5ba13?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" }
];

function Categories() {
  return (
    <section className={styles.categories}>
      <h2 className="section-title">Descubra fornecedores de casamento por categoria</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link to={category.link}>
            <div key={index} className="category-item">
                <img src={category.imageSrc} alt={category.name} className="category-icon" />
                <p className="category-name">{category.name}</p>
            </div>
          </Link>
        ))}
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1dbacf3-0da3-4e38-9867-785164740e25?placeholderIfAbsent=true&apiKey=ba428365f10b481897249f94cd5b5af7" alt="" className="decorative-image" />
      </div>
     
    </section>
  );
}

export default Categories;