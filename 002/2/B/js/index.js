// TODO：请补充代码
const optionList = $(".option")
for(let i = 0; i < optionList.length; i++) {
    // console.log(optionList[i].classList)
    optionList[i].onclick = function() {
        // console.log(optionList)
        for(let j = 0; j < optionList.length; j++) {
            // console.log(optionList[j])
            optionList[j].classList.remove("active")
        };
        // console.log(i)
        optionList[i].classList.add("active")
    }
}
