# AngInputOutputEx => AngFormEx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Project Introduction

1. Video Ref: <https://learning.oreilly.com/videos/angular-the/9781788998437/9781788998437-video6_4/>
2. Use of fxLayout <https://tburleson-layouts-demos.firebaseapp.com/#/docs>

### Task: Add Angular Material

1. Online Ref: <https://material.angular.io/guide/getting-started>
2. Run terminal command: ```ng add @angular/material```
3. Add Material Module
4. Note: we need to restart the sever to see the results
5. If errors still persist, check the Material Module for Exports and Inports registrations

### Task: Add Angular Flex-Layout

1.Online Ref: <https://github.com/angular/flex-layout>
2. Run terminal command: ```npm i -s @angular/flex-layout @angular/cdk```
3. Note: we need to restart the sever to see the results
4. Add redistration to the Material Module
4. Test with <https://tburleson-layouts-demos.firebaseapp.com/#/docs>```fxLayoutAlign="space-around center"```

## We now have a starter project with Angular Material and Angular Flex Layout

### Task: Add components, recipe model and service files for recipes

### Task: Add recipe list template

### Note: for *ngIf="isTrue"; else text

```typescript
    <ng-container *ngIf="isDone;  then iAmDone; else iAmNotDone">
    </ng-container>

    <ng-template #iAmDone>
      It's Done!
    </ng-template>

    <ng-template #iAmNotDone>
      It's Not Done!
    </ng-template>
  ```

  1. Ref: <https://stackoverflow.com/questions/43006550/how-to-use-ngif-else>

## Task: Add a templates form for editing a recipe
