/**
 * Clean
 * -----------------------------------------------------------------------------
 */

import gulp 						from 'gulp';
import folders					from './folders';
import del 							from 'del';


// Task `clean`
gulp.task('clean', () => {
		del(`${folders.build}/css`, {force: true});
		del(`${folders.build}/fonts`, {force: true});
		del(`${folders.build}/img`, {force: true});
		del(`${folders.build}/js`, {force: true});
	}
);