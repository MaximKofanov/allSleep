var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglifyjs'),
		del = require('del'),
		imagemin = require('gulp-imagemin'),
		pngquant = require('imagemin-pngquant'),
		cache = require('gulp-cache'),
		autoprefixer = require('gulp-autoprefixer');;

gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function(){
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js'
		])
		.pipe(concat('libs.min.js')) // Собираем файлы
		.pipe(uglify()) // Сжимаем их
		.pipe(gulp.dest('app/js')); // Выгружаем
});

gulp.task('clean', function() {
		return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
		return gulp.src('app/img/**/*')
			.pipe(cache(imagemin({
					interlaced: true,
					progressive: true,
					svgoPlugins: [{removeViewBox: false}],
					use: [pngquant()]
			})))
				.pipe(gulp.dest('dist/img'));
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {
	var buildCss = gulp.src([ // Переносим CSS стили dist
		'app/css/main.css',
		'app/css/libs.min.css'
		])
		.pipe(gulp.dest('dist/css'))
		var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты dist
		.pipe(gulp.dest('dist/fonts'))
		var buildJs = gulp.src('app/js/**/*') // Переносим скрипты dist
		.pipe(gulp.dest('dist/js'))
		var buildHtml = gulp.src('app/*.html') // Переносим HTML dist
		.pipe(gulp.dest('dist'));
});

gulp.task('clear', function () {
		return cache.clearAll();
})

gulp.task('default', ['watch']);