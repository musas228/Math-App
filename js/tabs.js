export default tabs
function tabs() {
    let tabsBtn = document.querySelectorAll(".navbar-tab")
    let tabsPage = document.querySelectorAll(".page")
    function clickTab(event) {
        let targetButton = event.target
        tabsBtn.forEach((item) => { item.classList.remove("active") })
        tabsPage.forEach((item) => { item.classList.remove("active-page") })
        targetButton.classList.add('active')
        console.log((document.getElementById(targetButton.id)));
        (document.getElementById(`tab-${targetButton.id}`)).classList.add('active-page')
    }
    tabsBtn.forEach((item) => { item.addEventListener("click", clickTab) })

}