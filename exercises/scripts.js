if (typeof jQuery !== 'undefined'){
    $(document).ready(function () {
        $('#drag').draggable({
            revert : 'valid'
        });

        $('#not-drag').draggable({
            revert : 'invalid'
        });

        $('#drop').droppable({
            accept: "#drag",
            drop : function(){
                alert('Done !');
            }

        });
    });
} else {
    /**
     * First we attach the event to the page. As said, HTML must be responsible for Skeleton only
     */
    window.addEventListener('DOMContentLoaded', function () {
        document.getElementById("submit-form").addEventListener("click", processForm, false);
        document.getElementById("message").addEventListener("input", ev => {
            /** every time something is changed in message, we update the counter */
            document.getElementById("char-counter").innerText = document.getElementById("message").value.length;
        }, false);
        /** we initialize the char counter*/
        document.getElementById("char-counter").innerText = document.getElementById("message").value.length;
    }, false);

    function processForm(event) {
        /** we prevent the submit*/
        event.preventDefault();
        /**
         * Will be used to store the name from inputs
         * @type {string}
         */
        let name = "";
        /**
         * Will be used to store the text from the message
         * @type {string}
         */
        let message = document.getElementById("message").value;
        /**
         * For the display of the date
         * @type {Date}
         */
        let date = new Date();
        /**
         * Will be used to see if any error was raised
         * @type {boolean}
         */
        let error = false;
        /**
         * Let's hide all the errors if any
         */
        for (let el of document.querySelectorAll('.error')) el.style.display = 'none';
        /**
         * If message length is lower than 100 characters, we raise an error
         */
        if (message.length < 100) {
            /** improvement idea : check if the message contains html and strip tags */
            document.getElementById("message-error").innerHTML = "Your message is too short";
            document.getElementById("message-error").style.display = "block";
            error = true;
        }
        /**
         * We will check the inputed email against the regex
         */
        let email = document.getElementById("email").value;
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(String(email).toLowerCase())) {
            document.getElementById("email-error").innerHTML = "Your email does not fit standards";
            document.getElementById("email-error").style.display = "block";
            error = true;
        }
        if (error === false) {
            /** no error, we can process */
            Array.from(document.getElementsByTagName("input")).forEach(function (input) {
                /** loop throught the input tags */
                if (input.getAttribute('id') === "firstname" || input.getAttribute('id') === "lastname") {
                    name += " "+input.value;
                } else {
                    document.getElementById(input.getAttribute('id') + "-result").innerHTML = input.value;
                }
            });
            document.getElementById('name').innerHTML = name;
            document.getElementById('datetime').innerHTML = date.toDateString();
            document.getElementById("message-result").innerHTML = message;
            /** shows the result */
            document.getElementById('result').style.display = "block";
            /** hides the form */
            document.getElementById('contact-form').style.display = "none";
        }
    }
}