Modernizr.load([
    {
        load: 'sites/all/themes/subtheme/js/jquery-1.7.1.min.js',
        complete: function () {
            Modernizr.load([
            	Drupal.settings.basePath+Drupal.settings.theme_path.path+'/js/jquery.validate.min.js',
            	Drupal.settings.basePath+Drupal.settings.theme_path.path+'/js/custom.js'
            ]);

        }
    }/*,{
        load : 'ielt7!/js/DD_belatedPNG_0.0.8a-min.js',
        callback: function() {
            $(function() {
                DD_belatedPNG.fix('img, .png_bg');
            });
        }
    }*/
]);