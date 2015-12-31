var WIDGET_HOST = "http://codeville.org.in";

function resizeQuoraWidget(iframe) {
    iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
}

function quora_widget(width, height, type, url, element) {
    var template = '<iframe width="' + width + 'px"'
                   + ' src="' + WIDGET_HOST + '/quoracard/process?url=' +
                   url + '" onload="resizeQuoraWidget(this)" FRAMEBORDER=0></iframe>';
    element.innerHTML = template;
}

window.addEventListener("DOMContentLoaded", function() {
    var quora_profile_elements = document.querySelectorAll("[quora-profile]");
    for(var i = 0; i < quora_profile_elements.length; i++) {
        var quora_profile_element = quora_profile_elements[i];
        var url = quora_profile_element.getAttribute('quora-profile');
        quora_widget('380', '200', 'card', url, quora_profile_element);
    }
}, false);
