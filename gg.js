const bet = async()=>{
    const data =  await fetch("https://article-fcggx11v4-first-times-projects.vercel.app/api/content",{ mode:"no-cors",cache: 'no-store', method:'GET' }).then((rews)=>rews.json())
    console.log(JSON.stringify(data))
}

bet()