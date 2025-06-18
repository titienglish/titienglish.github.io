function openYouTubeChannel() {

    var channelId = "@titienglish"; // Hoặc ID kênh nếu có
    var appUrl = "vnd.youtube://" + channelId;
    var webUrl = "https://www.youtube.com/" + channelId;

    // Mở ứng dụng YouTube
    window.location.href = appUrl;

    // Nếu sau 1 giây không mở được ứng dụng, mở trên trình duyệt
    setTimeout(function () {
        window.open(webUrl, "_blank");
    }, 1000);
}