import { CSInterface } from "csinterface";


const csInterface = new CSInterface();

csInterface.setContextMenuByJSON(JSON.stringify({
  id: 'refreshPanel',
  label: 'Refresh Panel'
}), () => { location.reload(); });

csInterface.evalScript('doAlert()');
