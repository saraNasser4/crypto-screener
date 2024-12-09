# Getting Started with Create React App

I started by creating the app and remove and add the essential items.

## initialize React Router

I needed to make it basic at first so I only added the name of the pages and up until now everythings work good.
There was something I faced in this part which was I'd made the router in the App component so I thought throughout this project the App component is gonna be bigger and it's not a good parctice in the future so I moved the Router inside the Index component.

## finish with Home page

finish with the basics of the styling and the logic of Home page.
there were some issues here where I needed to make the router inside a nav so I made a component to it.

## create the table where all of our data are gonna end there

I started with the only the styling before adding the API to make sure that I'm gonna only work on it.
I added a varible changes whenever the size of the screen changes so I can display only data fits the screen and I'm satisfied with the results so far.

## Add coingecko api

I put the data from that API in separate component just to make sure that I can access to it in whatever part in this project and wrap it on the Home component.
I displayed the data in the screen and everything works perfact up until now there only one thing I need to add which is change the format from the data depends on the type of it.

## Formating the data 

I needed to make the data looks stylish and change the style depends on what kind of data we render.

## Style Filter section

I wanted to make a search bar and sorting input so I can access my data more easliy up until now I only add the style there's no logic.

## Add Search bar

In this section I use a url from CoinGecko API to fetch data based on the name of a coin that user types in the search bar.
I was facing infinite loops cuz I'd used UseEffect to re-render everytime the user entered something in the search bar.However, I solved it by controlled the dependency array in useEffect I onlly included the user's text rather than the func itself getSearchResult.

## Finish with Currency component

I made the currency input functional so when the user write down any type of currency the api fetch the data with this currency.
As always you aren't sure what's the user gonna write so I've handled by before I send the url with the currency. I had to make sure first if this currency exist or not in the first place and I've done it by adding a default value to the url just in case if something went wrong and if the user write down his name for exapmle it shows N/A.

## Finish with Sorting component

This section wasn't risky as Currency componet cuz at least the user's not gonna write anything he's just gonna choose so I changed the url to change when the value changed.

## Remove Home Component

I realized that the Home component was not useful to me and also it'd made diffcult to manage the Crypto page as a default So, it was better to remove it and make the Crypto as main page.

## Done with the Pagination component

It was really a daunting task I'd been tryna solve it for 3 days almost. however, I figured out the simplicity is the key instead of writing down 7 func and object contains all of the data I'd write only 3 (next, prev, total btn) and it works fine.
I removed the useRef to handling the DOM manipulate and instead I used useState why? using useRef is daunting to debug compared to useState hook.


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
