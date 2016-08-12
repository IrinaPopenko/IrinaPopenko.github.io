function generationTestPage() {

    var headerH3 = document.createElement("h3");
    headerH3.innerHTML = "Тест по программированию";
    document.body.appendChild(headerH3);

    var questionList = document.createElement("ol");
    questionList.setAttribute("id", "questionList");
    document.body.appendChild(questionList);


    for (var i = 1; i <= 3; i++) {
        var questionItem = document.createElement("li");
        questionItem.innerHTML = "Вопрос №" + i;
        questionList.appendChild(questionItem);

        var answerList = document.createElement("ul");
        answerList.listStyle = "none";
        questionItem.appendChild(answerList);

        for (var j = 1; j <= 3; j++) {
            var answerItem = document.createElement("li");
            answerList.appendChild(answerItem);

            var check = document.createElement("input");
            check.type = "checkbox";
            check.id = "check" + i + j;
            answerItem.appendChild(check);

            var lable = document.createElement("lable");
            lable.setAttribute("for", "check" + i + j);
            lable.appendChild(document.createTextNode("Вариант ответа №" + j));

            answerItem.appendChild(lable);
        }
    }

    var sendButton = document.createElement("button");
    sendButton.innerHTML = "Проверить мои результаты";
    document.body.appendChild(sendButton);
}

generationTestPage();