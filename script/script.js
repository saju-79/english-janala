 const hiddenLoding = () =>{
    document.getElementById("loding").classList.add("hidden")
}
const showModel = () =>{
    document.getElementById("loding").classList.remove("hidden")
}
document.getElementById("main-section").classList.add("hidden");
document.getElementById("faq-section").classList.add("hidden");
   document.getElementById("level-sction").classList.remove("hidden");
   
// first baner 
document.getElementById("start-btn").addEventListener("click" , function(e){
    // e.defaultPrevented()
       hiddenLoding()
    e.preventDefault()
    const password = document.getElementById("password-int").value;
    const convertpass = parseInt(password);
    if(convertpass === 123456){
        document.getElementById("heaser-section").classList.add("hidden");
        document.getElementById("img-div").classList.add("hidden");
        document.getElementById("main-section").classList.remove("hidden");
         document.getElementById("level-sction").classList.remove("hidden");
        loderBtn()
         document.getElementById("faq-section").classList.remove("hidden");
        
    }else{alert("inter your wrong password")}
})
// api section
document.getElementById("LogOut-btn").addEventListener("click" , function(){
     document.getElementById("heaser-section").classList.remove("hidden");
        document.getElementById("faq-section").classList.add("hidden");
     document.getElementById("img-div").classList.remove("hidden");
      document.getElementById("main-section").classList.add("hidden");
       document.getElementById("faq-section").classList.add("hidden");
     hiddenLoding()
});
const loderBtn = () =>{
    showModel()
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then( (res) => res.json())
    .then((data) => displayLoder(data.data))
}
const displayLoder = (datas)=> { 
    
    hiddenLoding()
     document.getElementById("level-sction").classList.remove("hidden");
        document.getElementById("faq-section").classList.add("hidden");
    const headerBtn = document.getElementById("header-buuton");
    datas.forEach(data => {
        
        const div = document.createElement("div");
        div.innerHTML =`
        <button 
        onclick="levelLoder('${data.level_no}')"
        id="btn-Lesson"  class="btn in-active   font-medium flex gap-1 ">
        <img src="/imges/fa-book-open.png" alt="">
        Lesson -${data.level_no}</button>
        `
        headerBtn.appendChild(div);
       
    });
 
   
}
const levelLoder = (id) =>{
    showModel()
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    fetch(url).then((res) => res.json())
    .then((data) =>{
        displayLevl(data.data)
    })
}

const displayLevl = (levels) =>{
    hiddenLoding()

    //  button not dynamic
    
    

     document.getElementById("level-sction").classList.remove("hidden");
        document.getElementById("faq-section").classList.add("hidden");
    const erroePagse = document.getElementById("error-pagse");
    if(levels.length<1){
        erroePagse.classList.remove("hidden");
    }else{
         erroePagse.classList.add("hidden");
         
    }
    const LevelSection = document.getElementById("level-sction");
    LevelSection.innerHTML =""
    levels.forEach(level =>{
    
const div = document.createElement('div');
div.innerHTML =`
 <div class="p-8 text-center card space-y-10 border border-[#422AD5] h-60  ">
   <div class="space-y-2">
     <h3 class="text-[#000000] font-bold text-lg ">${level.word}</h3>
    <p class="text-[#181818] font-semibold text-sm">${level.meaning? level.meaning :"Not Available " }</p>
    <h1 class="text-[#000000] font-normal text-xl">"${level.pronunciation ? level.pronunciation : "Not Available"}"</h1>
   </div>
   <div class="flex justify-between">
    <button
    onclick ="LodDitels('${level.id}')"
     class="btn">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

         </button>
    <button class="btn">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
</svg>

</button>
   </div>
</div>


`
LevelSection.appendChild(div)
})
}

const LodDitels = (id) =>{
    showModel()
    fetch(`https://openapi.programming-hero.com/api/word/${id}`)
    .then((res) => res.json())
    .then((data) => displayDitels(data.data))

}
const displayDitels = (ditels) =>{
    hiddenLoding()
     document.getElementById("level-sction").classList.remove("hidden");
       document.getElementById("faq-section").classList.add("hidden");
    const ditesBtn = document.getElementById("my_modal_5");
    ditesBtn.showModal()
    const div = document.createElement("div");
        div.innerHTML = `
 <div class="modal-box card p-6 space-y-3 text-start w-96 h-110 gap-2">
    
 
       <h1 class="text-xl font-bold"> ${ditels.word} (:${ditels.pronunciation})</h1>
       <h3 class="text-md font-bold">Meaning <br><span class="font-semibold text-sm"> ${ditels.meaning}</span></h3>
       <h3 class="text-md font-bold">Example <br>
        <span class="font-normal">${ditels.sentence}</span>
       <h3 class="text-md font-bold">parts of speech <br>
        <span class="font-normal">${ditels.partsOfSpeech}</span>

    </h3>
    <div class="">
        <h4 class="text-md font-semibold">সমার্থক শব্দ গুলো</h4>
        <p class="flex gap-2">
            <button class="btn">${ditels.synonyms[0]? ditels.synonyms[0] : ""}</button>
            <button class="btn">${ditels.synonyms[1] ? ditels.synonyms[1] : ""}</button>
            <button class="btn">${ditels.synonyms[2] ? ditels.synonyms[1] : ""}</button>
        </p>
    </div>
 

    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn bg-[#422AD5] text-yellow-50 font-semibold">Complete Learning</button>
      </form>
    </div>
  </div>



`
ditesBtn.appendChild(div);
           
}
 hiddenLoding()

 document.getElementById("faq-btn").addEventListener("click" , function(){
    hiddenLoding()
   document.getElementById("faq-section").classList.remove("hidden");
   document.getElementById("level-sction").classList.add("hidden");
 } , 400)

  document.getElementById("level-sction").classList.remove("hidden");
   document.getElementById("faq-section").classList.add("hidden");

 