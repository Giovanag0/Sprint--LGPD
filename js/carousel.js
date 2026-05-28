

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
  constructor(image, title, url) {
    this.image = image;
    this.title = title;
    this.url = url
  }
      
    static Start(arr){

            if(arr && arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Update();
                Carousel.ResetTimer();
            } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static ResetTimer(){
        if(Carousel._interval) clearInterval(Carousel._interval);
            Carousel._interval = setInterval(function(){
                Carousel.Next();
        }, 5000);
    }

   static Next() {
        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        Carousel.Update();
        Carousel.ResetTimer();
    }

static Prev() {
        Carousel._sequence--;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
        Carousel.Update();
        Carousel.ResetTimer();
    }

static Update() {
        let obj = carouselArr[Carousel._sequence];
        const divImg = document.getElementById("carousel");

        if (divImg) {
            divImg.style.backgroundImage = `url('img/${obj.image}')`;
            divImg.style.backgroundSize = "contain";
            divImg.style.backgroundRepeat = "no-repeat"; 
            divImg.style.backgroundPosition = "center";
        }

      const divTitle = document.getElementById("carousel-title");
      if (divTitle){
        divTitle.innerHTML = `<a href="${obj.url}">${obj.title}</a>`;
      }
    }
}
