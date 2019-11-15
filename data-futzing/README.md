Having direct control over the dataset used to build this model, I could not resist making changes to it as I went along. I'm aware that this isn't ideal, but we have to work with what we have.

- `master.txt` is the original dataset as compiled from PFR
- `clean.txt` is the result of basic wrangling on `master`: drop rows we don't need, only get the stats we're interested in, etc. The process can be found in `clean-data.ipynb`
- `standard.txt` is the result of standardizing every row (actual stats are standardized against the season in which they occur; non-stats, such as `season` or `quint`, are standardized across the entire dataset); this is so that, when PCA and "cardinality reduction" of the target class (read: `player`) occur, the metric differences across features remains at the same scale (`standardize-data.ipynb` contains the logic; justification for standardizing by year can be found in `change-over-year.ipynb`)
- `pca.txt` is the standardized data reduced to three dimensions (cf `pca.ipynb`)
- `career.txt` finds the mean of the (absolute value of) each player's games from `pca.txt` (cf `compile-career.ipynb)