const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

let x = 0;
storeItems.forEach(function(item) {
    let price = item.price;
    let name = item.name;
    let details = item.details;
    let stock = item.inStock;

    if (stock === true) {
        $('#items').append('<div id="' + x + '" class="itemsDisplay"> </div>');
        $('#' + x).append('<p class="p1">$' + price + '</p>');
        $('#' + x).append('<p class="p2">' + name + '</p>');
        $('#' + x).append('<p class="p3">' + details + '</p>');
    }
    x++;
  });

$('.button p').css('cursor', 'pointer');

const change = $('.button p');

$(change).on('click', function() {
  $('html').toggleClass("backgroundDark");
});
$(change).on('click', function() {
    $('.itemsDisplay').toggleClass("itemsDisplayDark");
  });
$(change).on('click', function() {
    $('.button').toggleClass("buttonDark");
});
$(change).on('click', function() {
    $('.aboveText').toggleClass("aboveTextDark");
});
$(change).on('click', function() {
    $('.borderSmall').toggleClass("borderSmallDark");
});