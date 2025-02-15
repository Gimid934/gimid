grid = document.querySelector('.kebfr');
pan = document.querySelector('.panel');
ch = document.querySelector('.chp');
nam = document.querySelector('.nam');
toky = document.querySelector('.toky');
navbs = document.querySelectorAll('.nav2-but');
flips = document.querySelectorAll('.flips');
createButtons();

function randint(max) {
    return Math.floor(Math.random() * max);
}
nocl = []
function createCircle(event) {
    if (! nocl.includes(event["srcElement"]) && Array.from(buttons).includes(event["srcElement"])) {
      pan.innerHTML += event["srcElement"].innerHTML.match(/\w+/) + " "
  }
    col = `hsl(${randint(360)} ${100} ${45+randint(10)})`
    stand_w = event["srcElement"].getBoundingClientRect()["width"]/2 - 10
    w = stand_w + randint(stand_w/4) + stand_w/4
    ml = event['x'] - event["srcElement"].getBoundingClientRect()["left"] - w/2
    mt = event['y'] - event["srcElement"].getBoundingClientRect()["top"] - w/2
    styl = "background-image:radial-gradient("+col+",#ffffff);width:"+w+"px;height:"+w+"px;top:"+mt+"px;left:"+ml+"px;"
    if (! nocl.includes(event["srcElement"]) && Array.from(buttons).includes(event["srcElement"])) {
        event["srcElement"].innerHTML = "<div class='paint' style='"+styl+"'></div>" + event["srcElement"].innerHTML
        nocl.push(event["srcElement"])
    }
    event["srcElement"].classList.add('keb-active')
}

function getRandomWord() {
  const wordList = ['ability',
    'able',
     'aboard',
      'about',
       'above',
        'accept'
        , 'accident', 'account', 'accurate', 'acres', 'across', 'act', 'action', 'active', 'activity', 'actual', 'actually', 'add', 'addition', 'adult', 'advice', 'affect', 'afraid', 'after', 'again', 'against', 'age', 'ago', 'agree', 'ahead', 'aid', 'air', 'airplane', 'alike', 'alive', 'all', 'allow', 'almost', 'alone', 'along', 'aloud', 'alphabet', 'already', 'also', 'although', 'am', 'among', 'amount', 'ancient', 'angle', 'angry', 'animal', 'another', 'answer', 'ants', 'any', 'anybody', 'anyone', 'anything', 'anyway', 'anywhere', 'apart', 'apple', 'applied', 'are', 'area', 'arm', 'army', 'around', 'arrange', 'arrive', 'arrow', 'art', 'article', 'as', 'aside', 'ask', 'asleep', 'at', 'ate', 'atom', 'atomic', 'attached', 'attack', 'attempt', 'audience', 'author', 'average', 'avoid', 'aware', 'away', 'baby', 'back', 'bad', 'badly', 'bag', 'balance', 'ball', 'balloon', 'band', 'bank', 'bar', 'bare', 'bark', 'barn', 'base', 'baseball', 'basic', 'basis', 'basket', 'bat', 'battle', 'be', 'bean', 'bear', 'beat', 'beauty', 'became', 'because', 'become', 'becoming', 'bee', 'been', 'before', 'began', 'begun', 'behavior', 'behind', 'being', 'believed', 'bell', 'belong', 'below', 'belt', 'bend', 'beneath', 'bent', 'beside', 'best', 'bet', 'better', 'between', 'beyond', 'bicycle', 'bigger', 'biggest', 'bill', 'birds', 'birth', 'birthday', 'bit', 'bite', 'black', 'blank', 'blanket', 'blew', 'blind', 'block', 'blood', 'blow', 
   'blue', 'board', 'boat', 'body', 'bone', 'book', 'border', 'born', 'both', 'bottle', 'bottom', 'bound', 'bow', 'bowl', 'box', 'boy', 'brain', 'branch', 'brass', 'brave', 'bread', 'break', 'breath', 'breathe', 'breeze', 'brick', 'bridge', 'brief', 'bright', 'bring', 'broad', 'broke', 'broken', 'brother', 'brought', 'brown', 'brush', 'buffalo', 'build', 'building', 'built', 'buried', 'burn', 'burst', 'bus', 'bush', 'business', 'busy', 'but', 'butter', 'buy', 'by', 'cabin', 'cage', 'cake', 'call', 'calm', 'came', 'camera', 'camp', 'can', 'canal', 'cannot', 'cap', 'capital', 'captain', 'captured', 'car', 'carbon', 'card', 'care', 'careful', 'carried', 'carry', 'case', 'cast', 'castle', 'cat', 'catch', 'cattle', 'caught', 'cause', 'cave', 'cell', 'cent', 'center', 'central', 'century', 'certain', 'chain', 'chair', 'chamber', 'chance', 'change', 'changing', 'chapter', 'charge', 'chart', 'check', 'cheese', 'chemical', 'chest', 'chicken', 'chief', 'child', 'children', 'choice', 'choose', 'chose', 'chosen', 'church', 'circle', 'circus', 'citizen', 'city', 'class', 'claws', 'clay', 'clean', 'clear', 'clearly', 'climate', 'climb', 'clock', 'close', 'closely', 'closer', 'cloth', 'clothes', 'clothing', 'cloud', 'club', 'coach', 'coal', 'coast', 'coat', 'coffee', 'cold', 'collect', 'college', 'colony', 'color', 'column', 'combine', 'come', 'coming', 'command', 'common', 'company', 'compare', 'compass', 'complete', 'complex', 'composed', 'compound', 'congress', 'consider', 'consist', 'contain', 'contrast', 'control', 'cook', 'cookies', 'cool', 'copper', 'copy', 'corn', 'corner', 'correct', 'cost', 'cotton', 'could', 'count', 'country', 'couple', 'courage', 'course', 'court', 'cover', 'cow', 'cowboy', 'crack', 'cream', 'create', 'creature', 'crew', 'crop', 'cross', 'crowd', 'cry', 'cup', 'curious', 'current', 'curve', 'customs', 'cut', 'cutting', 'daily', 'damage', 'dance', 'danger', 'dark', 'darkness', 'date', 'daughter', 'dawn', 'day', 'deal', 'dear', 'decide', 'declared', 'deep', 'deeply', 'deer', 'degree', 'depend', 'depth', 'describe', 'desert', 'design', 'desk', 'detail', 
   'develop', 'diagram', 'diameter', 'did', 'differ', 'dig', 'dinner', 'direct', 'directly', 'dirt', 'dirty', 'discover', 'discuss', 'disease', 'dish', 'distance', 'distant', 'divide', 'division', 'do', 'doctor', 'does', 'dog', 'doing', 'doll', 'dollar', 'done', 'donkey', 'door', 'dot', 'double', 'doubt', 'down', 'dozen', 'draw', 'drawn', 'dream', 'dress', 'drew', 'dried', 'drink', 'drive', 'driven', 'driver', 'driving', 'drop', 'dropped', 'drove', 'dry', 'duck', 'due', 'dug', 'dull', 'during', 'dust', 'duty', 'each', 'eager', 'ear', 'earlier', 'early', 'earn', 'earth', 'easier', 'easily', 'east', 'easy', 'eat', 'eaten', 'edge', 'effect', 'effort', 'egg', 'eight', 'either', 'electric', 'element', 'elephant', 'eleven', 'else', 'empty', 'end', 'enemy', 'energy', 'engine', 'engineer', 'enjoy', 'enough', 'enter', 'entire', 'entirely', 'equal', 'equally', 'equator', 'escape', 'even', 'evening', 'event', 'ever', 'every', 'everyone', 'evidence', 'exact', 'exactly', 'examine', 'example', 'except', 'exchange', 'excited', 'exciting', 'exercise', 'exist', 'expect', 'explain', 'explore', 'express', 'extra', 'eye', 'face', 'facing', 'fact', 'factor', 'factory', 'failed', 'fair', 'fairly', 'fall', 'fallen', 'familiar', 'family', 'famous', 'far', 'farm', 'farmer', 'farther', 'fast', 'fastened', 'faster', 'fat', 'father', 'favorite', 'fear', 'feathers', 'feature', 'fed', 'feed', 'feel', 'feet', 'fell', 'fellow', 'felt', 'fence', 'few', 'fewer', 'field', 'fierce', 'fifteen', 'fifth', 'fifty', 'fight', 'fighting', 'figure', 'fill', 'film', 'final', 'finally', 'find', 'fine', 'finest', 'finger', 'finish', 'fire', 'firm', 'first', 'fish', 'five', 'fix', 'flag', 'flame', 'flat', 'flew', 'flies', 'flight', 'floating', 'floor', 'flow', 'flower', 'fly', 'fog', 'folks', 'follow', 'food', 'foot', 'football', 'for', 'force', 'foreign', 'forest', 'forget', 'forgot', 'form', 'former', 'fort', 'forth', 'forty', 'forward', 'fought', 'found', 'four', 'fourth', 'fox', 'frame', 'free', 'freedom', 'fresh', 'friend', 'friendly', 'frighten', 'frog', 'from', 'front', 'frozen', 'fruit', 'fuel', 'full', 'fully', 'fun', 'function', 
   'funny', 'fur', 'further', 'future', 'gain', 'game', 'garage', 'garden', 'gas', 'gasoline', 'gate', 'gather', 'gave', 'general', 'gentle', 'gently', 'get', 'getting', 'giant', 'gift', 'girl', 'give', 'given', 'giving', 'glad', 'glass', 'globe', 'go', 'goes', 'gold', 'golden', 'gone', 'good', 'goose', 'got', 'grabbed', 'grade', 'grain', 'graph', 'grass', 'gravity', 'gray', 'great', 'greater', 'greatest', 'greatly', 'green', 'grew', 'ground', 'group', 'grow', 'grown', 'growth', 'guard', 'guess', 'guide', 'gulf', 'gun', 'habit', 'had', 'hair', 'half', 'halfway', 'hall', 'hand', 'handle', 'handsome', 'hang', 'happen', 'happened', 'happily', 'happy', 'harbor', 'hard', 'harder', 'hardly', 'has', 'hat', 'have', 'having', 'hay', 'he', 'headed', 'heading', 'health', 'heard', 'hearing', 'heart', 'heat', 'heavy', 'height', 'held', 'hello', 'help', 'helpful', 'her', 'herd', 'here', 'herself', 'hidden', 'hide', 'high', 'higher', 'highest', 'highway', 'hill', 'him', 'himself', 'his', 'history', 'hit', 'hold', 'hole', 'hollow', 'home', 'honor', 'hope', 'horn', 'horse', 'hospital', 'hot', 'hour', 'house', 'how', 'however', 'huge', 'human', 'hundred', 'hung', 'hungry', 'hunt', 'hunter', 'hurried', 'hurry', 'hurt', 'husband', 'ice', 'idea', 'identity', 'if', 'ill', 'image', 'imagine', 'improve', 'in', 'inch', 'include', 'income', 'increase', 'indeed', 'indicate', 'industry', 'inside', 'instance', 'instant', 'instead', 'interest', 'interior', 'into', 'invented', 'involved', 'iron', 'is', 'island', 'it', 'its', 'itself', 'jack', 'jar', 'jet', 'job', 'join', 'joined', 'journey', 'joy', 'judge', 'jump', 'jungle', 'just', 'keep', 'kept', 'key', 'kids', 'kind', 'kitchen', 'knew', 'know', 'known', 'label', 'labor', 'lack', 'lady', 'laid', 'lake', 'lamp', 'land', 'language', 'large', 'larger', 'largest', 'last', 'late', 'later', 'laugh', 'law', 'lay', 'layers', 'lead', 'leader', 'leaf', 'learn', 'least', 'leather', 'leave', 'leaving', 'led', 'left', 'leg', 'length', 
   'lesson', 'let', 'letter', 'level', 'library', 'lie', 'life', 'lift', 'light', 'like', 'likely', 'limited', 'line', 'lion', 'lips', 'liquid', 'list', 'listen', 'little', 'live', 'living', 'load', 'local', 'locate', 'location', 'log', 'lonely', 'long', 'longer', 'look', 'loose', 'lose', 'loss', 'lost', 'lot', 'loud', 'love', 'lovely', 'low', 'lower', 'luck', 'lucky', 'lunch', 'lungs', 'lying', 'machine', 'mad', 'made', 'magic', 'magnet', 'mail', 'main', 'mainly', 'major', 'make', 'making', 'man', 'managed', 'manner', 'many', 'map', 'mark', 'market', 'married', 'mass', 'massage', 'master', 'material', 'matter', 'may', 'maybe', 'me', 'meal', 'mean', 'means', 'meant', 'measure', 'meat', 'medicine', 'meet', 'melted', 'member', 'memory', 'men', 'mental', 'merely', 'met', 'metal', 'method', 'mice', 'middle', 'might', 'mighty', 'mile', 'military', 'milk', 'mill', 'mind', 'mine', 'minerals', 'minute', 'mirror', 'missing', 'mission', 'mistake', 'mix', 'mixture', 'model', 'modern', 'moment', 'money', 'monkey', 'month', 'mood', 'moon', 'more', 'morning', 'most', 'mostly', 'mother', 'motion', 'motor', 'mountain', 'mouse', 'mouth', 'move', 'movement', 'movie', 'moving', 'mud', 'muscle', 'music', 'musical', 'must', 'my', 'myself', 'nails', 'name', 'nation', 'national', 'native', 'natural', 'nature', 'near', 'nearby', 'nearer', 'nearest', 'nearly', 'neck', 'needed', 'needle', 'needs', 'negative', 'neighbor', 'nervous', 'nest', 'never', 'new', 'news', 'next', 'nice', 'night', 'nine', 'nobody', 'nodded', 'noise', 'none', 'noon', 'nor', 'north', 'nose', 'not', 'note', 'noted', 
   'nothing', 'notice', 'noun', 'now', 'number', 'numeral', 'nuts', 'object', 'observe', 'obtain', 'occur', 'ocean', 'of', 'off', 'offer', 'office', 'officer', 'official', 'oil', 'old', 'older', 'oldest', 'on', 'once', 'one', 'only', 'onto', 'open', 'opinion', 'opposite', 'or', 'orange', 'orbit', 'order', 'ordinary', 'origin', 'original', 'other', 'ought', 'our', 'out', 'outer', 'outline', 'outside', 'over', 'own', 'owner', 'oxygen', 'pack', 'package', 'page', 'paid', 'pain', 'paint', 'pair', 'palace', 'pale', 'pan', 'paper', 'parallel', 'parent', 'park', 'part', 'partly', 'parts', 'party', 'pass', 'passage', 'past', 'path', 'pattern', 'pay', 'peace', 'pen', 'pencil', 'people', 'per', 'percent', 'perfect', 'perhaps', 'period', 'person', 'personal', 'pet', 'phrase', 'physical', 'piano', 'pick', 'picture', 'pictured', 'pie', 'piece', 'pig', 'pile', 'pilot', 'pine', 'pink', 'pipe', 'pitch', 'place', 'plain', 'plan', 'plane', 'planet', 'planned', 'planning', 'plant', 'plastic', 'plate', 'plates', 'play', 'pleasant', 'please', 'pleasure', 'plenty', 'plural', 'plus', 'pocket', 'poem', 'poet', 'poetry', 'point', 'pole', 'police', 'pond', 'pony', 'pool', 'poor', 'popular', 'porch', 'port', 'position', 'positive', 'possible', 'possibly', 'post', 'pot', 'potatoes', 'pound', 'pour', 'powder', 'power', 'powerful', 'practice', 'prepare', 'present', 'press', 'pressure', 'pretty', 'prevent', 'previous', 'price', 'printed', 'private', 'prize', 'probably', 'problem', 'process', 'produce', 'product', 'program', 'progress', 'promised', 'proper', 'properly', 'property', 'proud', 'prove', 'provide', 'public', 'pull', 'pupil', 'pure', 'purple', 'purpose', 'push', 'put', 'putting', 'quarter', 'queen', 'question', 'quick', 'quickly', 'quiet', 'quietly', 'quite', 'rabbit', 'race', 'radio', 'railroad', 'rain', 'raise', 'ran', 'ranch', 'range', 'rapidly', 'rate', 'rather', 'raw', 'rays', 'reach', 'read', 'reader', 'ready', 'real', 'realize', 'rear', 'reason', 'recall', 
   'receive', 'recent', 'recently', 'record', 'red', 'refer', 'refused', 'region', 'regular', 'related', 'remain', 'remember', 'remove', 'repeat', 'replace', 'replied', 'report', 'require', 'research', 'respect', 'rest', 'result', 'return', 'review', 'rhyme', 'rhythm', 'rice', 'rich', 'ride', 'riding', 'right', 'ring', 'rise', 'rising', 'river', 'road', 'roar', 'rock', 'rocket', 'rocky', 'rod', 'roll', 'roof', 'room', 'root', 'rope', 'rose', 'rough', 'round', 'route', 'row', 'rubbed', 'rubber', 'rule', 'ruler', 'run', 'running', 'rush', 'sad', 'saddle', 'safe', 'safety', 'said', 'sail', 'sale', 'salmon', 'salt', 'same', 'sand', 'sang', 'sat', 'save', 'saved', 'saw', 'say', 'scale', 'scared', 'scene', 'school', 'science', 'score', 'screen', 'sea', 'search', 'season', 'seat', 'second', 'secret', 'section', 'see', 'seed', 'seeing', 'seems', 'seen', 'seldom', 'select', 'sell', 'send', 'sense', 'sent', 'sentence', 'separate', 'series', 'serious', 'serve', 'service', 'sets', 'setting', 'settle', 'settlers', 'seven', 'several', 'shade', 'shadow', 'shake', 'shaking', 'shall', 'shallow', 'shape', 'share', 'sharp', 'she', 'sheep', 'sheet', 'shelf', 'shells', 'shelter', 'shine', 'shinning', 'ship', 'shirt', 'shoe', 'shoot', 'shop', 'shore', 'short', 'shorter', 'shot', 'should', 'shoulder', 'shout', 'show', 'shown', 'shut', 'sick', 'sides', 'sight', 'sign', 'signal', 'silence', 'silent', 'silk', 'silly', 'silver', 'similar', 'simple', 'simplest', 'simply', 'since', 'sing', 'single', 'sink', 'sister', 'sit', 'sitting', 'six', 'size', 'skill', 'skin', 'sky', 'slabs', 'sleep', 'slept', 'slide', 'slight', 'slightly', 'slip', 'slipped', 'slope', 'slow', 'slowly', 'small', 'smaller', 'smallest', 'smell', 'smile', 'smoke', 'smooth', 'snake', 'snow', 'so', 'soap', 'social', 'society', 'soft', 'softly', 'soil', 'solar', 'sold', 'soldier', 'solid', 'solution', 'solve', 'some', 'somebody', 'somehow', 'someone', 'sometime', 'son', 'song', 'soon', 'sort', 'sound', 'source', 'south', 
   'southern', 'space', 'speak', 'special', 'species', 'specific', 'speech', 'speed', 'spell', 'spend', 'spent', 'spider', 'spin', 'spirit', 'spite', 'split', 'spoken', 'sport', 'spread', 'spring', 'square', 'stage', 'stairs', 'stand', 'standard', 'star', 'stared', 'start', 'state', 'station', 'stay', 'steady', 'steam', 'steel', 'steep', 'stems', 'step', 'stepped', 'stick', 'stiff', 'still', 'stock', 'stomach', 'stone', 'stood', 'stop', 'stopped', 'store', 'storm', 'story', 'stove', 'straight', 'strange', 'stranger', 'straw', 'stream', 'street', 'strength', 'stretch', 'strike', 'string', 'strip', 'strong', 'stronger', 'struck', 'struggle', 'stuck', 'student', 'studied', 'studying', 'subject', 'success', 'such', 'sudden', 'suddenly', 'sugar', 'suggest', 'suit', 'sum', 'summer', 'sun', 'sunlight', 'supper', 'supply', 'support', 'suppose', 'sure', 'surface', 'surprise', 'swam', 'sweet', 'swept', 'swim', 'swimming', 'swing', 'swung', 'syllable', 'symbol', 'system', 'table', 'tail', 'take', 'taken', 'tales', 'talk', 'tall', 'tank', 'tape', 'task', 'taste', 'taught', 'tax', 'tea', 'teach', 'teacher', 'team', 'tears', 'teeth', 'tell', 'ten', 'tent', 'term', 'terrible', 'test', 'than', 'thank', 'that', 'thee', 'them', 'then', 'theory', 'there', 'these', 'they', 'thick', 'thin', 'thing', 'think', 'third', 'thirty', 'this', 'those', 'thou', 'though', 'thought', 'thousand', 'thread', 'three', 'threw', 'throat', 'through', 'throw', 'thrown', 'thumb', 'thus', 'thy', 'tide', 'tie', 'tight', 'tightly', 'till', 'time', 'tin', 'tiny', 'tip', 'tired', 'title', 'to', 'tobacco', 'today', 'together', 'told', 'tomorrow', 'tone', 'tongue', 'tonight', 'too', 'took', 'tool', 'top', 'topic', 'torn', 'total', 'touch', 'toward', 'tower', 'town', 'toy', 'trace', 'track', 'trade', 'traffic', 'trail', 'train', 'trap', 'travel', 'treated', 'tree', 'triangle', 'tribe', 'trick', 'tried', 'trip', 'troops', 'tropical', 'trouble', 'truck', 'trunk', 'truth', 'try', 'tube', 'tune', 'turn', 'twelve', 'twenty', 'twice', 'two', 'type', 'typical', 'uncle', 'under', 'unhappy', 'union', 'unit', 'universe', 'unknown', 
   'unless', 'until', 'unusual', 'up', 'upon', 'upper', 'upward', 'us', 'use', 'useful', 'using', 'usual', 'usually', 'valley', 'valuable', 'value', 'vapor', 'variety', 'various', 'vast', 'verb', 'vertical', 'very', 'vessels', 'victory', 'view', 'village', 'visit', 'visitor', 'voice', 'volume', 'vote', 'vowel', 'voyage', 'wagon', 'wait', 'walk', 'wall', 'want', 'war', 'warm', 'warn', 'was', 'wash', 'waste', 'watch', 'water', 'wave', 'way', 'we', 'weak', 'wealth', 'wear', 'weather', 'week', 'weigh', 'weight', 'welcome', 'well', 'went', 'were', 'west', 'western',
    'wet', 'whale', 'what', 'whatever', 'wheat', 'wheel', 'when', 'whenever', 'where', 'wherever', 'whether', 'which', 'while', 'whistle', 'white', 'who', 'whole', 'whom', 'whose', 'why', 'wide', 'widely', 'wife', 'wild', 'will', 'willing', 'win', 'wind', 'window', 'wing', 'winter', 'wire', 'wise',
     'wish', 'with', 'within', 'without', 'wolf', 'women', 'won', 'wonder', 'wood', 'wooden', 'wool', 'word', 'wore', 'work', 'worker', 'world', 'worried',
      'worry', 'worse', 'worth', 'would', 'wrapped', 'write', 'writer', 'writing', 'written', 'wrong', 'wrote', 'yard', 'year', 'yellow', 'yet',
       'you', 'young', 'younger',
        'your', 'yourself', 'youth',
         'zero', 'zebra', 'zipper',
          'zoo']
    return wordList[randint(wordList.length)];
}

async function createButtons() {
    checker = []
    for (let i = 0; i < 14; i++) {
      const button = document.createElement('button');
      button.className = 'keb';
      t = getRandomWord()
      while (checker.includes(t)) {
        t = getRandomWord()
      }
      checker.push(t)
      button.textContent = t || 'Button';
      button.addEventListener('click', createCircle);
      grid.appendChild(button);
      b = document.createElement('blurer')
      b.style.cssText = `backdrop-filter: blur(${Math.round(0.146*button.getBoundingClientRect()['width'])}px);`
      button.appendChild(b)
    }
    buttons = document.querySelectorAll('.keb')
}

function checkp() {
  ch.classList.add('backger');
  setTimeout(() => {
    ch.classList.remove('backger')
  }, 1000)
  pan.innerHTML = ""
  paints = document.querySelectorAll('.paint')
  paints.forEach(paint => {
    paint.remove()
  });
  kebs = document.querySelectorAll('.keb');
  kebs.forEach(kebl => {
    kebl.classList.remove('keb-active')
  });
  nocl = []
}
ch.addEventListener('click', checkp);

navbs.forEach(button => {
  button.addEventListener('click', () => {
    present_flip = document.querySelector('.flips.acti')
    if (! (present_flip.classList[1] == button.classList[1])) {
      present_flip.classList.remove('acti')
      present_flip.classList.add('invis')
      
      new_flip = document.querySelector('.flips.' + button.classList[1])
      new_flip.classList.remove('invis')
      new_flip.classList.add('acti')
    }
    console.log(button.classList[1])
    button.children[0].classList.add('rotator');
    setTimeout(() => {
      button.children[0].classList.remove('rotator')
    }, 500)
  })
})
// temporary
frs = [['adel_sleep.gif', 'veryveryverylooooongtext'], ['mur_sleep.gif', 'test2'], ['broken.svg', 'blank test']]
// frs=[]
wraper_f = document.querySelector('.basic-wrap.bf')
template_f = document.querySelector('.nam-holder.frn.invis')
for (let i = 0; i<frs.length; i++) {
    part = template_f.cloneNode(deep = true)
    part.classList.remove('invis')
    // temporary
    if (ImageExist('sourse/'+frs[i][0])) {
      part.children[0].src = 'sourse/'+frs[i][0]
    } else {
      part.children[0].src = 'sourse/blank.png'
    }
    // part.children[0].src = ???
    part.children[1].innerText = frs[i][1]
    wraper_f.appendChild(part)
}
template_f.remove()

tasks = [["https://youtube.com", 'adel_sleep.gif', 'blank1', "52"], ['https://google.com', 'mur_sleep.gif', 'blank2', '49'], ['https://telegram.org', 'blank.png', 'realblank3', '163']]
wraper_t = document.querySelector('.basic-wrap.bt')
template_t = document.querySelector('.nam-holder.tsk.invis')
for (let i = 0; i<tasks.length; i++) {
  part = template_t.cloneNode(deep = true)
  part.classList.remove('invis')
  part.href = tasks[i][0]
  if (ImageExist('sourse/'+tasks[i][1])) {
    part.children[0].src = 'sourse/'+tasks[i][1]
  } else {
    part.children[0].src = 'sourse/blank.png'
  }
  part.children[1].innerText = tasks[i][2]
  part.children[2].innerText = "+"+tasks[i][3]+" EXP"
  wraper_t.appendChild(part)
}
template_t.remove()

leveler = document.querySelector('.lvl')
pas = document.querySelector('.pas')
cou = 0
l_t = leveler.innerText
function showup(){
    console.log(cou)
    if (cou < 4) {
        cou += 1
        leveler.innerText = "lvl !"
    } else if (cou == 4) {
        cou += 1
        pas.classList.remove('invis')
        pas.disabled = false
        leveler.innerText = "lvl ->"
    } else if (cou > 4 & cou < 9) {
        cou += 1
        pas.classList.add('invis')
        pas.disabled = true
        leveler.innerText = l_t
    } else if (cou == 9) {
        leveler.innerText = "lvl ?"
    }
    
}
leveler.addEventListener('click', showup);
shelves = [["2024-08-24", 'word1 word1 word1word1 word1word1 word1word1 word1word1 word1word1 word1', "52"], ['2024-08-25', 'word2', '149'], ['2024-04-25', 'word3', '263'], ["2024-08-24", 'word4', "102"],]
wraper_v = document.querySelector('.basic-wrap.bv')
shelves_dates = []
shelves.sort((a,b) => new Date(b[0]).getTime() - new Date(a[0]).getTime())

chunk = document.querySelector('.chunk.invis')
comb = document.querySelector('.comb.invis')

for (let i = 0; i<shelves.length; i++) {
    if (!shelves_dates.includes(shelves[i][0])) {
        shelves_dates.push(shelves[i][0])
        ch_part = chunk.cloneNode(deep = true)
        ch_part.classList.remove('invis')
        d = shelves[i][0]
        d = d.split("-")
        ch_part.children[0].innerText = `${d[2]}.${d[1]}.${d[0]}`
        wraper_v.appendChild(ch_part)
    }
    part = comb.cloneNode(deep = true)
    part.classList.remove('invis')
    part.children[0].innerText = shelves[i][1]
    part.children[1].innerText = shelves[i][2]+" EXP"
    ch_part.appendChild(part)
}
chunk.remove()
comb.remove()

function ImageExist(url) 
{
  try {
   var img = new Image();
   img.src = url;
   return img.height != 0;
  } catch {
    return false
  }
}
