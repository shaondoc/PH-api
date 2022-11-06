
    function LoadData(data) {
        fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>DisplayData(data));
    }

   


    function DisplayData(data) {
        console.log(data)
        const posts =document.getElementById('posts');
        for (const x of data) {
            let div=document.createElement('div');
            div.classList.add('post')
            div.innerHTML= `
            <h3><span class="post-id">${x.id} </span> - ${x.title}</h3>
            <hr/>
            <p>${x.body} </p>
            `;

            posts.appendChild(div);

        }
        
    }
    LoadData();