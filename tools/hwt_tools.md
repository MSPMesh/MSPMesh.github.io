---
title: HeyWhatsThat Tools
parent: Tools
---

## Coverage Ranker

<input type="file" id="kmzInputRank" accept=".kmz" multiple style="display:none" />
<button id="rankBtn">Select KMZ File(s) for Ranking</button>


This will rank each node by how much coverage it has.

## Coverage Merger
<input type="file" id="kmzInputMerge" accept=".kmz" multiple style="display:none" />
<button id="mergeBtn">Select KMZ File(s) for Merging</button>

This will merge node coverage


<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/photopea/UPNG.js/UPNG.js"></script>
<script>
{% include js/hwt_ranker.js %}
{% include js/hwt_merger.js %}
</script>