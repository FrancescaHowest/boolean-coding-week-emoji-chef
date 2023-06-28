# Emoji Chef

## Border of Bowl

```` css
.bowl-slot:first-child {
/*
    Border radius: top left, top right, bottom left, bottom right
*/


    border-radius: 20px 0 0 20px;
}

.bowl-slot:last-child {
    border-radius: 0 20px 20px 0;
}

/*
 Alle bowl-slots die niet het last-child zijn
 */
.bowl-slot:not(:last-child) {
    border-right: none;
}
````

## SVG X

```` html
<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 2L2 17" stroke="#1212B2" stroke-width="3"/>
    <path d="M2 2L17 17" stroke="#1212B2" stroke-width="3"/>
</svg>
````
