# Notes / Observations

### Standalone Component
* Decorator @Component has additional flags to enable standalone
* Use @Component to import required Component, Modules, Directives, etc instead of NgModule
* Added extract of NgModule in app.component

### Signals - (example: user.component)
* Signal VS ZoneJS: While Zone.js change detection needs to go through all components to identify changes and update the view, signals respond precisely to changes in the controller, instantly updating the view.
* Signal: Object that stores a value. Angular is notified when that value changes and manages subscription to this signal in all components where it is being used and update states accordingly. (Similar to BehaviorSubject?)
    * signal() => __tracks__ a signal 
    * set() => __updates__ a signal
    * computed() => allows Angular to do change detection on computed value used with signals. 
    * To read signal value, signal needs to be called in template. E.g use __users().name__ instead of __users.name__

### Vite
* New Esbuilder builder (Vite) with Angular 16 - Default with Angular 17
* Faster Development Build Times (60%+ build improvement)
* Hot Module Replacement (HMR) - allows developers to see changes instantly without a full page reload. Improves development speed and productivity by providing immediate feedback on changes.
* Optimized Production Builds
* Simplified Configuration compared to traditional Angular CLI config

## Cheat Sheet
* Preview Schematic: ng g c `<component>` __--dry-run__
* `<app-header/>` Shorthand if not using content projection