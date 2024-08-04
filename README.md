# Angular 14+ Changes - Notes / Observations

## Standalone Component
* Decorator `@Component` has additional flags to enable standalone.
* Use `@Component` to import `imports: []` required Components, Modules, Directives, etc., instead of `NgModule`.
* Added extract of `NgModule` in `app.component`.

## Signals (example: user.component)
* **Signal vs ZoneJS**: While `Zone.js` change detection needs to go through all components to identify changes and update the view, signals respond precisely to changes in the controller, instantly updating the view.
* **Signal**: Object that stores a value. Angular is notified when that value changes and manages subscriptions to this signal in all components where it is being used and updates states accordingly.
    * `signal()` => **tracks** a signal 
    * `set()` => **updates** a signal
    * `computed()` => allows Angular to perform change detection on computed values used with signals.
    * To read signal value, the signal needs to be called in the template. E.g., use `users().name` instead of `users.name`.
* Import `input` from core (__make sure it is lowercase!__) - will be read-only!
    * Syntax if no value set: `input.required('')`
    * Note that there is no change in how the parent will pass data to the input.
* Signal with ngModel usage:
    * Create property in component and assign an empty signal  `enterName = signal('')`
    * Use 2-way binding in template `[(ngModel)] = enterName`, ngModel handles the signal which doesn't need to be read with `()` in template.

## Syntax Changes
* Alternative syntax (less verbose) for `@Output` (abstraction). Import `output` from core _(unlike `input`, it is not related to `signal`)_. E.g., `@Output() select = new EventEmitter();` becomes `select = output<string>();`. No change required in parent component either way.
* `*ngFor` structural directive is not default anymore, needs to be imported in component, `import { NgFor } ...` and add to `imports: [NgFor]`. 
* `*ngFor` replaced with new syntax (Added in Angular 17) => `@for { some HTML }`
* `*ngIf` structural directive is not default anymore, needs to be imported in component, `import { NgIf } ...` and add to `imports: [NgIf]`. 
* `*ngIf` replaced with new syntax (Added in Angular 17) => `@if(condition) { some HTML}` tracking is used by default now. 
* Additionally, an `@else` can be added as a fallback display, which allows to get rid of the `*ngIf=conditon; else fallback`,  `<ng-template #fallback>` pattern.
* Alternative __Dependency Injection__ syntax: `private serviceName = inject(ServiceName)` instead of using the constructor for DI (Added in Angular 14)

## Vite
* New Esbuilder builder (Vite) with Angular 16 - Default with Angular 17.
* Faster development build times (60%+ build improvement).
* Hot Module Replacement (HMR) - allows developers to see changes instantly without a full page reload. Improves development speed and productivity by providing immediate feedback on changes.
* Optimized production builds.
* Simplified configuration compared to traditional Angular CLI config.

## Cheat Sheet
* Preview schematic: `ng g c <component> --dry-run`
* `<app-header/>` shorthand if not using content projection.
* Input typing: `@Input({required: true}) property!: string;`
    * Add `!` to tell TypeScript that the value will be set eventually.
    * Configure the `Input` decorator to ensure that an error is caught if we forget to pass a value.
