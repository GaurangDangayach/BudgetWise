async function fetch_data() {
    res = await fetch("https://dummyjson.com/recipes/1");
    res = await res.json();
    console.log(res.image);
}

fetch_data();