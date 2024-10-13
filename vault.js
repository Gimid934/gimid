leveler = document.querySelector('.lvl')
pas = document.querySelector('.pas')
cou = 0
l_t = leveler.innerText
function showup(){
    console.log(cou)
    if (cou < 4) {
        cou += 1
        leveler.innerText = "lvl !"
    } else if (cou == 4) {
        cou += 1
        pas.classList.remove('invis')
        pas.disabled = false
        leveler.innerText = "lvl ->"
    } else if (cou > 4 & cou < 9) {
        cou += 1
        pas.classList.add('invis')
        pas.disabled = true
        leveler.innerText = l_t
    } else if (cou == 9) {
        leveler.innerText = "lvl ?"
    }
    
}
leveler.addEventListener('click', showup);
frs = [["2024-08-24", 'figure enjoy her life figure enjoy her life figure enjoy her life lol pon', "52"], ['2024-08-25', 'ananas search lake flower', '149'], ['2024-04-25', 'coin master lol kek', '263'], ["2024-08-24", 'figure enjoy ananas', "102"], ]
wraper = document.querySelector('.basic-wrap')
frs_dates = []
frs.sort((a,b) => new Date(b[0]).getTime() - new Date(a[0]).getTime())

chunk = document.querySelector('.chunk.invis')
comb = document.querySelector('.comb.invis')

for (let i = 0; i<frs.length; i++) {
    if (!frs_dates.includes(frs[i][0])) {
        frs_dates.push(frs[i][0])
        ch_part = chunk.cloneNode(deep = true)
        ch_part.classList.remove('invis')
        d = frs[i][0]
        d = d.split("-")
        ch_part.children[0].innerText = `${d[2]}.${d[1]}.${d[0]}`
        wraper.appendChild(ch_part)
    }
    part = comb.cloneNode(deep = true)
    part.classList.remove('invis')
    part.children[0].innerText = frs[i][1]
    part.children[1].innerText = frs[i][2]+" NS"
    ch_part.appendChild(part)
}
chunk.remove()
comb.remove()