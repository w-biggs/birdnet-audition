import { CSInterface } from 'csinterface';
import { readFile } from 'fs/promises';
import { execFile } from 'child_process';

const csInterface = new CSInterface();

csInterface.setContextMenuByJSON(JSON.stringify({
  id: 'refreshPanel',
  label: 'Refresh Panel'
}), () => { location.reload(); });

const button = document.getElementById('identify');

function writeResult(result: string) {
  const resultEl = document.getElementById('result');
  if (resultEl) {
    resultEl.innerText = result;
  }
};

function displayPredictions(predictions: any) {
  let predictionString = '';
  for (let i = 0; i < 10; i++) {
    const prediction = predictions[String(i)];
    const species = prediction.species.split(';');
    predictionString += `<span title="${prediction.score}">${Number(prediction.score).toFixed(3)}: ${species[0]} ${species[1] ? `<span class="sciname">(${species[1]})</span>` : ''}</span><br />`;
  }

  const resultEl = document.getElementById('result');
  if (resultEl) {
    resultEl.innerHTML = predictionString;
  }
};

async function submitToBirdNET(path: string) {
  const fileBuffer = await readFile(path);
  const fileBlob = new Blob([fileBuffer], { type: 'audio/wav' });

  const formData = new FormData();
  formData.append('upload', fileBlob, 'file.wav');

  writeResult('Loading...');

  const response = await fetch('https://birdnet.cornell.edu/api/upload', {
    method: 'POST',
    body: formData
  });
  const jsonData = await response.json();

  if (jsonData.prediction) {
    displayPredictions(jsonData.prediction['0']);
  } else {
    writeResult('Errored.');
  }

  const txtPath = path.replace('.wav', '.txt');
  const args = ['fish', '-c', `python3 ~/dev/BirdNET-Analyzer/analyze.py --i (wslpath -a '${path}') --o (wslpath -a '${txtPath}') --rtype csv --min_conf 0.01 --sensitivity 1.5`];

  console.log(args.join(' '));

  const birdnetLocal = execFile('C:/WINDOWS/system32/wsl.exe', args, async (error, stdout, stderr) => {
    if (error) {
      console.error(error);
    }
    console.log(stdout);

    const rawLocal = document.getElementById('rawlocal');
    const resultFileText = await readFile(txtPath, 'utf8');
    if (rawLocal) {
      rawLocal.innerText = resultFileText;
    }
  });
};

button?.addEventListener('click', () => {
  csInterface.evalScript('exportFile()', (result) => {
    if (result) {
      const filePath: string = result;
      console.log(filePath);
      submitToBirdNET(filePath);
    }
  });
});
