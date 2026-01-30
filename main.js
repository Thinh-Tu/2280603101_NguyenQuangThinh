// ==================== CÂU 1 ====================
// Khai báo constructor function Product để tạo đối tượng sản phẩm
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// ==================== CÂU 2 ====================
// Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
const products = [
    new Product(1, "iPhone 15 Pro Max", 34990000, 10, "Electronics", true),
    new Product(2, "Samsung Galaxy S24 Ultra", 31990000, 5, "Electronics", true),
    new Product(3, "MacBook Pro 14 inch", 52990000, 3, "Electronics", true),
    new Product(4, "AirPods Pro 2", 6990000, 20, "Accessories", true),
    new Product(5, "Apple Watch Ultra 2", 23990000, 0, "Accessories", false),
    new Product(6, "Samsung Galaxy Buds 2 Pro", 4990000, 15, "Accessories", true),
    new Product(7, "Ốp lưng iPhone 15", 590000, 50, "Accessories", true),
    new Product(8, "Cáp sạc Type-C", 290000, 0, "Accessories", false)
];

console.log("========== CÂU 2: Mảng products ==========");
console.log(products);

// ==================== CÂU 3 ====================
// Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm
const productNameAndPrice = products.map(function (product) {
    return {
        name: product.name,
        price: product.price
    };
});

console.log("\n========== CÂU 3: Mảng chỉ chứa name và price ==========");
console.log(productNameAndPrice);

// ==================== CÂU 4 ====================
// Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
const inStockProducts = products.filter(function (product) {
    return product.quantity > 0;
});

console.log("\n========== CÂU 4: Sản phẩm còn hàng (quantity > 0) ==========");
console.log(inStockProducts);

// ==================== CÂU 5 ====================
// Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
const hasExpensiveProduct = products.some(function (product) {
    return product.price > 30000000;
});

// ==================== CÂU 6 ====================
// Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
const accessoriesProducts = products.filter(function (product) {
    return product.category === "Accessories";
});

const allAccessoriesAvailable = accessoriesProducts.every(function (product) {
    return product.isAvailable === true;
});

console.log("\n========== CÂU 6 ==========");
console.log("Tất cả sản phẩm Accessories đang được bán:", allAccessoriesAvailable);

// ==================== CÂU 7 ====================
// Tính tổng giá trị kho hàng. Giá trị kho = price × quantity
const totalInventoryValue = products.reduce(function (total, product) {
    return total + (product.price * product.quantity);
}, 0);

console.log("\n========== CÂU 7 ==========");
console.log("Tổng giá trị kho hàng:", totalInventoryValue.toLocaleString("vi-VN"), "VNĐ");

// ==================== CÂU 8 ====================
// Dùng for...of Duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("\n========== CÂU 8: Duyệt mảng với for...of ==========");
for (const product of products) {
    const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${product.name} - ${product.category} - ${status}`);
}

// ==================== CÂU 9 ====================
// Dùng for...in để: In ra tên thuộc tính và giá trị tương ứng
console.log("\n========== CÂU 9: Duyệt thuộc tính với for...in ==========");
const sampleProduct = products[0];
console.log("Thuộc tính của sản phẩm đầu tiên:");
for (const key in sampleProduct) {
    console.log(`  ${key}: ${sampleProduct[key]}`);
}

// ==================== CÂU 10 ====================
// Lấy danh sách tên các sản phẩm đang bán và còn hàng
const availableAndInStockNames = products
    .filter(function (product) {
        return product.isAvailable === true && product.quantity > 0;
    })
    .map(function (product) {
        return product.name;
    });

console.log("\n========== CÂU 10 ==========");
console.log("Danh sách tên sản phẩm đang bán và còn hàng:");
console.log(availableAndInStockNames);
