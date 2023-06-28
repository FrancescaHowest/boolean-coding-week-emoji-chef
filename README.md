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
