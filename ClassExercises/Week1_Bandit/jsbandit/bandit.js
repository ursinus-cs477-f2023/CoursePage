let totalReward = 0;
let pullsLeft = 40;

function printReward() {
    let dom = document.getElementById("totalReward");
    dom.innerHTML = "<h1>" + pullsLeft + " pulls left, Total Earnings: $<span style=\"color:green;\">" + totalReward + "</span></h1>";
}

class Bandit {
    /**
     * 
     * @param {*} seed Seed for random number generator
     * @param {*} picstill Path to still pic
     * @param {*} mx Max payout
     * @param {*} picmoving Path to pic when pulling
     * @param {*} domElement ID of DOM element where it goes
     */
    constructor(seed, mx, picstill, picmoving, domElement) {
        this.rng = new Math.seedrandom(seed);
        this.mx = mx;
        let dom = document.getElementById(domElement);
        dom.innerHTML = "<img src = \"" + picstill + "\" width=\"80%\">";
        this.dom = dom;
        const that = this;
        dom.onclick = function() {
            if (pullsLeft > 0) {
                this.innerHTML = "<img src = \"" + picmoving + "\" width=\"80%\">";
                setTimeout(function() {
                    let pull = that.pull();
                    totalReward += pull;
                    that.dom.innerHTML = "<img src = \"" + picstill + "\" width=\"80%\">";
                    that.dom.innerHTML += "<h1>$" + pull + "</h1>";
                    pullsLeft--;
                    printReward();
                }, 1000);
            }
            else {
                alert("You're out of pulls!");
            }
        }
    }

    pull() {
        return Math.round(this.mx*this.rng()*100);
    }
}