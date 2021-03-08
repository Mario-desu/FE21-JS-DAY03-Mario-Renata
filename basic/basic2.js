
function isBigger(first, second) {
            return first > second;
        } //returns true or false

        function findBiggest(input) {

            let number = input[0];

            input.forEach(function (value) {

                if (isBigger(value, number)) {
                    number = value;
                }
            });

            return number;
        }
        let input = [1, 7, -3, 9];
        document.getElementById("biggest").innerHTML = "The biggest number is : " + findBiggest(input);

        // var array = [1,7,-3,9];
        // var max =array[0];//30;array[3]
        // for (let i=1; i<array.length; i++){
        //     if (array[i] > max){
        //           max=array[i];
        //         }  
        // }

