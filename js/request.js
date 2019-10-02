$( document ).ready(function() {
    $.ajax({
        async: true,
        url: '/',
        method: 'post',
        data: {onload: true},
        success: function(data) {
            if($.trim(data)) {
                books(data);
            }
            else {
                $('output').html('Error.');
            }
        }
    });
});


var books = function(data) {
    var unit_flag = topic_flag = sub_flag = false;
    const output = $('.output');
    var string = '<ul><b>Book</b>';
    data.books.forEach(book => {
        string += '<li>' + book.name + '</li>';
        book.units.forEach(unit => {
            if (!topic_flag) { string += '<ul><b>Unit</b>'; topic_flag = true; }
            string += '<li>' + unit.name + '</li>';
            unit.topics.forEach(topic => {
                if(!unit_flag) { string += '<ul><b>Topic</b>'; unit_flag = true; }
                string += '<li>' + topic.name + '</li>';
                topic.subtopics.forEach(subtopic => {
                    if(!sub_flag) { string += '<ul><b>Sub-topic</b>'; sub_flag = true; }
                    string += '<li>' + subtopic.name + '</li>';
                });
                string += '</ul>';
                sub_flag = false;
            });
            string += '</ul>';
            unit_flag = false;
        });
        string += '</ul>';
        topic_flag = false;
    });
    string += '</ul>';
    output.append(string);
    
}

// $('.root').on('click', '#submit', function(e) {
//     console.log('clicked');
//     const key = document.getElementById("key").value;
//     const value = document.getElementById("value").value;
//     console.log(key, value);
//     $.ajax({
//         async: true,
//         url: '/',
//         method: 'post',
//         data: {key: key, value: value},
//         success: function(data) {
//             if ($.trim(data)) {
//                 $('#response').html(data);
//                 console.log('success');
//             }
//             else{
//                 console.log('error');
//             }
//         },
//         error: function(data) {
//             alert('error');
//             console.log(data);
//         }
//     });
//     //.done(function (response) {
//     //     alert('Yo');
//     // });
    
// });