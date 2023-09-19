// Table Sorting, searching

fetch("https://data.nasa.gov/resource/gh4g-9sfh.json")
.then((res) => {
    return res.json();
})

.then((data) => {
    console.log(data);
    
    data.forEach((user) => {
      // console.log(meteor_data);
        const d = new Date(user.year);
        let year = d.getFullYear();
        $("#table_body").append(`
            <tr>
                <td>${user.name}</td>
                <td>${user.id}</td>
                
                <td>${user.recclass}</td>
                <td>${user.mass + " Kg"}</td>
                
                <td>${year}</td>
                <td>${user.reclat}</td>
                <td>${user.reclong}</td>                
            </tr>        
        `)
        $(document).ready( function () {
          $('#meteor_table').DataTable();
        } );        
    });
})

let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

//    Active nav link on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < (offset + height))
    {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
};
