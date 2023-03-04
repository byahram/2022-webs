//창이 열릴때마다 실행하라
window.onload = function() {
    agentCheck();
}

//userAgent 호환성 체크
function agentCheck(){
    const agent = navigator.userAgent.toLowerCase();

    //os구분 - 객체화 
    const browserList = {
        mac: agent.match(/macintosh/i),
        windows: agent.match(/windows/i),
        iphone: agent.match(/iphone/i),
        android: agent.match(/android/i),
        ipad: agent.match(/ipad/i),
        ie7: agent.match(/msie 7.0/i),
        ie8: agent.match(/msie 8.0/i),
        ie9: agent.match(/msie 9.0/i),
        ie10: agent.match(/msie 10.0/i),
        ie11: agent.match(/rv:11.0/i),
        edg: agent.match(/edg/i),
        chrome: agent.match(/chrome/i),
        safari: agent.match(/safari/i),
        firefox: agent.match(/firefox/i),
        opera: agent.match(/opera/i),
        whale: agent.match(/whale/i)
    };

    for(prop in browserList){
        if(browserList[prop]){
            // console.log(prop)
            document.querySelector("body").classList.add(prop);
            // document.getElementsByTagName("body").classList.add(prop);  옛날방식
        }
    }
};


//Code view
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
});

//Code tab menu
const tabTitle = document.querySelectorAll(".view-title ul li");
const tabMenu = document.querySelectorAll(".view-cont > div");

tabTitle.forEach((element,index) => {
    element.addEventListener("click", function(){
        tabTitle.forEach(el => {
            el.classList.remove("active");
        })

        element.classList.add("active");

        tabMenu.forEach(el => {
            el.style.display = "none";
        })
        tabMenu[index].style.display = "block";
    });
});


//Tab - jquery
const tabBtn = $(".tab-btn ul li");         //5개의 버튼을 변수에 저장 -> 할당
const tabCont = $(".tab-cont > div");       //5개의 컨텐츠를 변수에 저장 -> 할당

// 1. 버튼을 클릭하면 클릭한 버튼한테 active 추가
// 2. 버튼을 클릭하지 않은 다른 버튼은 active 제거
// 3. 버튼 인덱스 설정
// 4. 1번째 버튼은 1번째 컨텐츠 연결(버튼 인덱스 별 해당 컨텐츠 연결)
// 5. 모든 컨텐츠를 안보이게 설정
// 6. 클릭한 버튼의 해당 컨텐츠만 보이게 설정

tabBtn.click(function(){
    let target = $(this);                   //this 내가 클릭한 대상 -> btn -> li
    tabBtn.removeClass("active");
    target.addClass("active");

    let index = target.index();
    // alert(index);
    tabCont.css("display","none");
    tabCont.eq(index).css("display","block");
});

function modal(){
    document.querySelector(".info button").addEventListener("click", function(){
        document.querySelector("#modal").classList.remove("hide");
        document.querySelector("#modal").classList.add("show");
        document.querySelector(".view-cont > div:nth-child(1)").classList.add("active");
    });
    
    document.querySelector(".modal-cont button").addEventListener("click", function(){
        document.querySelector("#modal").classList.add("hide");
    });
}
