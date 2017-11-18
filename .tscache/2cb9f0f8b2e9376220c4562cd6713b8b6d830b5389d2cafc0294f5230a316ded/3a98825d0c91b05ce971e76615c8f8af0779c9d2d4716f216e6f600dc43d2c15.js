var express = require('express');
var path = require('path');
var app = express();
var chalk = require('chalk');
var log = console.log;
var port = process.env.PORT || 1001;
var environment = process.env.NODE_ENV || 'development';
app.use(express.static(path.join(__dirname, './public')));
app.get('/', function (req, res) { return res.sendFile(path.join(__dirname, '../views/map.html')); });
app.listen(port, function (err) {
    if (err)
        return console.log(err);
    log(chalk.white.bgGreen.bold("node listening on port " + port + " in " + environment + " mode"));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQzpcXFVzZXJzXFx1ZXNsZWkuc291emFcXERlc2t0b3BcXGFuaW1hdGUtZWxlbWVudC1hbG9uZy1zdmctcGF0aC13aXRoLWdhc2FwXFxpbmRleC50cyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx1ZXNsZWkuc291emFcXERlc2t0b3BcXGFuaW1hdGUtZWxlbWVudC1hbG9uZy1zdmctcGF0aC13aXRoLWdhc2FwXFxpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDbEMsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzVCLElBQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFBO0FBQ3JCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUM5QixJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFBO0FBRXZCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQTtBQUNyQyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUE7QUFFekQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUV6RCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLG1CQUFtQixDQUFDLENBQUMsRUFBdkQsQ0FBdUQsQ0FBQyxDQUFBO0FBRW5GLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFVBQUEsR0FBRztJQUNuQixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUM7UUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUMvQixHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUEwQixJQUFJLFlBQU8sV0FBVyxVQUFPLENBQUMsQ0FBQyxDQUFBO0FBQ3ZGLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxyXG5jb25zdCBjaGFsayA9IHJlcXVpcmUoJ2NoYWxrJylcclxuY29uc3QgbG9nID0gY29uc29sZS5sb2dcclxuXHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDEwMDFcclxuY29uc3QgZW52aXJvbm1lbnQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnXHJcblxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICcuL3B1YmxpYycpKSlcclxuXHJcbmFwcC5nZXQoJy8nLCAocmVxLCByZXMpID0+IHJlcy5zZW5kRmlsZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vdmlld3MvbWFwLmh0bWwnKSkpXHJcblxyXG5hcHAubGlzdGVuKHBvcnQsIGVyciA9PiB7XHJcblx0aWYoZXJyKSByZXR1cm4gY29uc29sZS5sb2coZXJyKVxyXG5cdGxvZyhjaGFsay53aGl0ZS5iZ0dyZWVuLmJvbGQoYG5vZGUgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fSBpbiAke2Vudmlyb25tZW50fSBtb2RlYCkpXHJcbn0pIl19