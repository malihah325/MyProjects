let images = ["imgaes/banner.png", "imgaes/bannerPlus2.png", "imgaes/bannerPlus3.png"];
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("bannerImage").src = images[currentIndex];
    console.log("Image changed to: " + images[currentIndex]);
}

setInterval(changeImage, 1000);

$(document).ready(function () {
    // Custom method to check for numbers in the name field
    $.validator.addMethod("noNumbers", function(value, element) {
        return this.optional(element) || /^[^0-9]+$/.test(value);
    }, "Name cannot contain numbers");

    $("#myForm").validate({
      rules: {
        name: {
          required: true,
          noNumbers: true
          
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          digits: true
        },
        textBox: {
          required: true
        }
      },
      messages: {
        name: {
            required: "The required field cannot be blank",
            noNumbers: "Name cannot contain numbers"
        },
        email: {
          required: "Enter Email Address",
          email: "Enter a Proper Email Address"
        },
        phone: {
          required: "Enter Your Phone Number",
          digits: "Enter only digits"
        },
        textBox: {
          required: "This field cannot be blank"
        }
      }
    });
  });