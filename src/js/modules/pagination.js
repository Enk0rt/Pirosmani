document.addEventListener('DOMContentLoaded', () => {
    // Товари масиву products
    const products = [
        { id: 1, name: "Куряче філе", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio accusamus alias.", price: "350 грн", image: "/assets/img/product.png" },
        { id: 1, name: "Куряче філе", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio accusamus alias.", price: "350 грн", image: "/assets/img/product.png" },
        { id: 1, name: "Куряче філе", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio accusamus alias.", price: "350 грн", image: "/assets/img/product.png" },
        { id: 1, name: "Куряче філе", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio accusamus alias.", price: "350 грн", image: "/assets/img/product.png" },
        { id: 1, name: "Куряче філе", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio accusamus alias.", price: "350 грн", image: "/assets/img/product.png" },
        { id: 1, name: "Куряче філе", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi odio accusamus alias.", price: "350 грн", image: "/assets/img/product.png" },
        { id: 2, name: "Яловиче філе", description: "Смачне яловиче філе.", price: "450 грн", image: "/assets/img/product.png" },
        { id: 3, name: "Свиняче філе", description: "Смачне свиняче філе.", price: "400 грн", image: "/assets/img/product.png" },
        { id: 4, name: "Теляче філе", description: "Смачне теляче філе.", price: "500 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
        { id: 5, name: "Кроляче філе", description: "Смачне кроляче філе.", price: "600 грн", image: "/assets/img/product.png" },
    ];

    const itemsPerPage = 20;
    let currentPage = 1;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const productsContainer = document.getElementById('products');
    const paginationContainer = document.getElementById('pagination');

    function displayProducts(page) {
    productsContainer.innerHTML = '';

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'products__card';
        productCard.setAttribute('data-product-id', product.id);

        productCard.innerHTML = `
            <img src="${product.image}" alt="Product image" class="products__card-img">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="star-rating">
                <span class="star" data-value="1"></span>
                <span class="star" data-value="2"></span>
                <span class="star" data-value="3"></span>
                <span class="star" data-value="4"></span>
                <span class="star" data-value="5"></span>
                <span class="count">0</span>
            </div>
            <p class="products__card-price">${product.price} <span>За 500гр</span></p>
            <button class="products__card-button btn">У кошик</button>
        `;

        productsContainer.appendChild(productCard);
        initializeStarRating(productCard, product.id);
    });

    displayPagination();
}

   function displayPagination() {
      paginationContainer.innerHTML = '';

      const createButton = (text, isActive, isDisabled, onClick) => {
         const button = document.createElement('button');
         button.textContent = text;
         button.className = isActive ? 'active' : '';
         button.disabled = isDisabled;
         if (onClick) {
            button.addEventListener('click', onClick);
         }
         return button;
      };

      const createArrowButton = (direction, onClick, isDisabled) => {
         const button = document.createElement('button');
         button.disabled = isDisabled;
         button.innerHTML = direction === 'left'
            ? `<svg width="14" height="24" viewBox="0 0 14 24" transform="rotate(180)" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807612 21.0711 0.807612 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM11 13.5L12 13.5L12 10.5L11 10.5L11 13.5Z" fill="#00AC4E"/>
    </svg>`
            : `<svg width="14" height="24" viewBox="0 0 14 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
    <path d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807611 1.97919 0.807611 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807612 21.0711 0.807612 22.0208 1.3934 22.6066C1.97919 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM11 13.5L12 13.5L12 10.5L11 10.5L11 13.5Z" fill="#00AC4E" rotate="180"/>
    </svg>`;
         if (onClick) {
            button.addEventListener('click', onClick);
         }
         return button;
      };

      // Adding left arrow button if currentPage is greater than 1
      if (currentPage > 1) {
         paginationContainer.appendChild(createArrowButton('left', () => {
            currentPage--;
            displayProducts(currentPage);
         }, false));
      }

      if (totalPages <= 7) {
         for (let i = 1; i <= totalPages; i++) {
            paginationContainer.appendChild(createButton(i, i === currentPage, false, () => {
               currentPage = i;
               displayProducts(currentPage);
            }));
         }
      } else {
         if (currentPage > 3) {
            paginationContainer.appendChild(createButton(1, currentPage === 1, false, () => {
               currentPage = 1;
               displayProducts(currentPage);
            }));
            paginationContainer.appendChild(createButton('...', false, true));
         }

         let start = Math.max(1, currentPage - 1);
         let end = Math.min(totalPages, currentPage + 1);

         if (currentPage <= 3) {
            start = 1;
            end = 4;
         }

         if (currentPage > totalPages - 3) {
            start = totalPages - 3;
            end = totalPages;
         }

         for (let i = start; i <= end; i++) {
            paginationContainer.appendChild(createButton(i, i === currentPage, false, () => {
               currentPage = i;
               displayProducts(currentPage);
            }));
         }

         if (currentPage < totalPages - 2) {
            paginationContainer.appendChild(createButton('...', false, true));
            paginationContainer.appendChild(createButton(totalPages, currentPage === totalPages, false, () => {
               currentPage = totalPages;
               displayProducts(currentPage);
            }));
         }
      }

      // Adding right arrow button if currentPage is less than totalPages
      if (currentPage < totalPages) {
         paginationContainer.appendChild(createArrowButton('right', () => {
            currentPage++;
            displayProducts(currentPage);
         }, false));
      }
   }


    function initializeStarRating(productCard, productId) {
    const stars = productCard.querySelectorAll('.star');
    const averageRatingElement = productCard.querySelector('.count');
    let ratings = JSON.parse(localStorage.getItem(`ratings-${productId}`)) || [];

    function updateAverageRating() {
        const total = ratings.reduce((acc, rating) => acc + rating, 0);
        const average = ratings.length ? (total / ratings.length).toFixed(1) : 0;
        averageRatingElement.textContent = average;

        const averageRounded = Math.round(average);
        stars.forEach((star, index) => {
            if (index < averageRounded) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.getAttribute('data-value'));
            ratings.push(rating);
            localStorage.setItem(`ratings-${productId}`, JSON.stringify(ratings));
            updateAverageRating();
        });

        star.addEventListener('mouseover', () => {
            const rating = parseInt(star.getAttribute('data-value'));
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('hover');
                } else {
                    s.classList.remove('hover');
                }
            });
        });

        star.addEventListener('mouseout', () => {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });

    updateAverageRating();
}
    displayProducts(currentPage);
});
