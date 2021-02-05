const api = "https://foodish-api.herokuapp.com/api/images/burger";
const imageContainer = document.querySelector(".imageContainer")
const foodImage = document.querySelector(".foodImage");
const button = document.querySelector(".button");


const getFoodData = async () => {
    try {
        await axios.get(api)
            .then((response) => {
                console.log(response.data);
                foodImage.src = response.data.image;
            })
    } catch (e) {
        console.log("Error", e)
    }
}



button.addEventListener("click", getFoodData);