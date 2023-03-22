var turn = "red"

const squares = document.querySelectorAll(".square")

squares.forEach( s => {
    s.addEventListener("click", (e) => {
        
        let el = e.target;

        if (el.getAttribute("active") === "true") {
            if (turn === "red") {
                el.classList.add("red")
                el.setAttribute("color", "red")
                el.innerText = "X"
                turn = "blue"

            } else {
                el.classList.add("blue")
                el.setAttribute("color", "blue")
                el.innerText = "O"
                turn = "red"
            }
        }

        el.setAttribute("active", "false")


        let pos = el.getAttribute("pos")
        let winner = false
        if (pos === "top-left") {
            // turn will not equal color
            let top_mid = el.parentNode.children[1]
            let top_right = el.parentNode.children[2]
            if ((top_mid.getAttribute("color") != turn && top_mid.getAttribute("color") != "") && (top_right.getAttribute("color") != turn && top_right.getAttribute("color") != "")) {
                // winner
                winner = true
            }

            let left_mid = el.parentNode.children[3]
            let bottom_left = el.parentNode.children[6]
            if ((left_mid.getAttribute("color") != turn && left_mid.getAttribute("color") != "") && (bottom_left.getAttribute("color") != turn && bottom_left.getAttribute("color") != "")) {
                // winner
                winner = true
            }


            let mid = el.parentNode.children[4]
            let bottom_right = el.parentNode.children[8]
            if ((bottom_right.getAttribute("color") != turn && bottom_right.getAttribute("color") != "") && (mid.getAttribute("color") != turn && mid.getAttribute("color") != "")) {
                // winner
                winner = true
            }
        }


        if (pos === "top-right") {
            // turn will not equal color
            let top_mid = el.parentNode.children[1]
            let top_right = el.parentNode.children[0]
            if ((top_mid.getAttribute("color") != turn && top_mid.getAttribute("color") != "") && (top_right.getAttribute("color") != turn && top_right.getAttribute("color") != "")) {
                // winner
                winner = true
            }

            let left_mid = el.parentNode.children[5]
            let bottom_left = el.parentNode.children[8]
            if ((left_mid.getAttribute("color") != turn && left_mid.getAttribute("color") != "") && (bottom_left.getAttribute("color") != turn && bottom_left.getAttribute("color") != "")) {
                // winner
                winner = true
            }


            let mid = el.parentNode.children[4]
            let bottom_right = el.parentNode.children[6]
            if ((bottom_right.getAttribute("color") != turn && bottom_right.getAttribute("color") != "") && (mid.getAttribute("color") != turn && mid.getAttribute("color") != "")) {
                // winner
                winner = true
            }
        }


        if (pos === "bottom-left") {
            // turn will not equal color
            let top_mid = el.parentNode.children[7]
            let top_right = el.parentNode.children[8]
            if ((top_mid.getAttribute("color") != turn && top_mid.getAttribute("color") != "") && (top_right.getAttribute("color") != turn && top_right.getAttribute("color") != "")) {
                // winner
                winner = true
            }

            let left_mid = el.parentNode.children[3]
            let bottom_left = el.parentNode.children[0]
            if ((left_mid.getAttribute("color") != turn && left_mid.getAttribute("color") != "") && (bottom_left.getAttribute("color") != turn && bottom_left.getAttribute("color") != "")) {
                // winner
                winner = true
            }


            let mid = el.parentNode.children[4]
            let bottom_right = el.parentNode.children[2]
            if ((bottom_right.getAttribute("color") != turn && bottom_right.getAttribute("color") != "") && (mid.getAttribute("color") != turn && mid.getAttribute("color") != "")) {
                // winner
                winner = true
            }
        }



        if (pos === "bottom-right") {
            // turn will not equal color
            let top_mid = el.parentNode.children[7]
            let top_right = el.parentNode.children[6]
            if ((top_mid.getAttribute("color") != turn && top_mid.getAttribute("color") != "") && (top_right.getAttribute("color") != turn && top_right.getAttribute("color") != "")) {
                // winner
                winner = true
            }

            let left_mid = el.parentNode.children[5]
            let bottom_left = el.parentNode.children[2]
            if ((left_mid.getAttribute("color") != turn && left_mid.getAttribute("color") != "") && (bottom_left.getAttribute("color") != turn && bottom_left.getAttribute("color") != "")) {
                // winner
                winner = true
            }


            let mid = el.parentNode.children[4]
            let bottom_right = el.parentNode.children[0]
            if ((bottom_right.getAttribute("color") != turn && bottom_right.getAttribute("color") != "") && (mid.getAttribute("color") != turn && mid.getAttribute("color") != "")) {
                // winner
                winner = true
            }
        }

        //check mid:
        if (pos === "mid") {
            // turn will not equal color
            let top_mid = el.parentNode.children[3]
            let top_right = el.parentNode.children[5]
            if ((top_mid.getAttribute("color") != turn && top_mid.getAttribute("color") != "") && (top_right.getAttribute("color") != turn && top_right.getAttribute("color") != "")) {
                // winner
                winner = true
            }

            let left_mid = el.parentNode.children[1]
            let bottom_left = el.parentNode.children[7]
            if ((left_mid.getAttribute("color") != turn && left_mid.getAttribute("color") != "") && (bottom_left.getAttribute("color") != turn && bottom_left.getAttribute("color") != "")) {
                // winner
                winner = true
            }


            let mid = el.parentNode.children[2]
            let bottom_right = el.parentNode.children[6]
            if ((bottom_right.getAttribute("color") != turn && bottom_right.getAttribute("color") != "") && (mid.getAttribute("color") != turn && mid.getAttribute("color") != "")) {
                // winner
                winner = true
            }

            let mid2 = el.parentNode.children[0]
            let bottom_right2 = el.parentNode.children[8]
            if ((bottom_right2.getAttribute("color") != turn && bottom_right2.getAttribute("color") != "") && (mid2.getAttribute("color") != turn && mid2.getAttribute("color") != "")) {
                // winner
                winner = true
            }
        }




        if (pos === "top-mid") {
            // turn will not equal color
            let top_mid = el.parentNode.children[0]
            let top_right = el.parentNode.children[2]
            if ((top_mid.getAttribute("color") != turn && top_mid.getAttribute("color") != "") && (top_right.getAttribute("color") != turn && top_right.getAttribute("color") != "")) {
                // winner
                winner = true
            }

            let left_mid = el.parentNode.children[4]
            let bottom_left = el.parentNode.children[7]
            if ((left_mid.getAttribute("color") != turn && left_mid.getAttribute("color") != "") && (bottom_left.getAttribute("color") != turn && bottom_left.getAttribute("color") != "")) {
                // winner
                winner = true
            }

        }


        if (pos === "left-mid") {
            // turn will not equal color
            let top_mid = el.parentNode.children[4]
            let top_right = el.parentNode.children[5]
            if ((top_mid.getAttribute("color") != turn && top_mid.getAttribute("color") != "") && (top_right.getAttribute("color") != turn && top_right.getAttribute("color") != "")) {
                // winner
                winner = true
            }

            let left_mid = el.parentNode.children[0]
            let bottom_left = el.parentNode.children[6]
            if ((left_mid.getAttribute("color") != turn && left_mid.getAttribute("color") != "") && (bottom_left.getAttribute("color") != turn && bottom_left.getAttribute("color") != "")) {
                // winner
                winner = true
            }

        }


        if (pos === "right-mid") {
            // turn will not equal color
            let top_mid = el.parentNode.children[4]
            let top_right = el.parentNode.children[3]
            if ((top_mid.getAttribute("color") != turn && top_mid.getAttribute("color") != "") && (top_right.getAttribute("color") != turn && top_right.getAttribute("color") != "")) {
                // winner
                winner = true
            }

            let left_mid = el.parentNode.children[2]
            let bottom_left = el.parentNode.children[8]
            if ((left_mid.getAttribute("color") != turn && left_mid.getAttribute("color") != "") && (bottom_left.getAttribute("color") != turn && bottom_left.getAttribute("color") != "")) {
                // winner
                winner = true
            }

        }


        if (pos === "bottom-mid") {
            // turn will not equal color
            let top_mid = el.parentNode.children[6]
            let top_right = el.parentNode.children[8]
            if ((top_mid.getAttribute("color") != turn && top_mid.getAttribute("color") != "") && (top_right.getAttribute("color") != turn && top_right.getAttribute("color") != "")) {
                // winner
                winner = true
            }

            let left_mid = el.parentNode.children[1]
            let bottom_left = el.parentNode.children[4]
            if ((left_mid.getAttribute("color") != turn && left_mid.getAttribute("color") != "") && (bottom_left.getAttribute("color") != turn && bottom_left.getAttribute("color") != "")) {
                // winner
                winner = true
            }

        }

        if (winner) {
            if (turn === "red") {
                // blue won
                document.querySelector(".winner").classList.add("blue-winner")
                document.querySelector(".winner").style.display = "block"
                document.querySelector(".winner").innerText = "Blue WON"    
            } else {
                //red won
                document.querySelector(".winner").classList.add("red-winner")
                document.querySelector(".winner").style.display = "block"
                document.querySelector(".winner").innerText = "Red WON"
            }
        }

        let counter = 0
        squares.forEach( sq => {
            if (sq.getAttribute("active") === "false") {
                counter ++
            }
        })

        if (counter === 9) {
            document.querySelector(".winner").classList.add("draw")
            document.querySelector(".winner").style.display = "block"
            document.querySelector(".winner").innerText = "DRAW"
        }


        
        // change turn banner
        if (turn === "blue") {
            document.querySelector(".turn").classList.remove("red")
            document.querySelector(".turn").classList.add("blue")
            document.querySelector(".turn").innerText = "Blue's Turn"
        } else {
            document.querySelector(".turn").classList.remove("blue")
            document.querySelector(".turn").classList.add("red")
            document.querySelector(".turn").innerText = "Red's Turn"
        }



    })
})




function clean() {
    squares.forEach( s => {
        s.setAttribute("color", "")
        s.setAttribute("active", "true")
        s.innerText = ""
    })
    turn = "red"
    document.querySelector(".turn").classList.remove("blue")
    document.querySelector(".turn").classList.add("red")
    document.querySelector(".turn").innerText = "Red's Turn"

    document.querySelector(".winner").style.display = "none"
}