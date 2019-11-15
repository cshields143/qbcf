Data was gathered from [PFR](https://www.pro-football-reference.com/) by means of a Chrome extension and a personal server.

Because PFR would really rather you not scrap their site, I followed the letter and only the letter of the law.

When the extension is installed and the Chrome browser is directed to a page on PFR, it checks the current HTML for the table of data that would result from a PFR Game Finder query. If such a table of results exists (our quarterback stats, split up by 100 results per page), then the relevant stats are scraped by JavaScript and a stringified version is injected on the page.

Again, if the current PFR page is a search query result, then the icon for the extension will "light up"; when clicked, the stringified version of the table is sent in a POST request to the private server for caching purposes (and if the results have already been saved, one can choose to overwrite the earlier save--should the need arise).

On the server, the stringified tables are stored in text documents under the `raw/` folder (these are included in the repo for the curious). The first line contains the URL of the original PFR page (including the search query used) and the date that this information was saved.

- `exists.php` checks if the particular page of results has been saved before
- `store.php` saves it when requested
- `combine.php` turns all of the individual files into one `master.txt` file (the final dataset, also included)

I consider this all to be morally permissible because I still clicked onto each individual page and completely filled out any Google ad forms that popped up; in my mind all I did was maximally minimize the amount of work I personally had to do to get here. May God have mercy on my soul.