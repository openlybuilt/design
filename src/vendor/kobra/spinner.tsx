import {Check,LoaderCircle} from 'lucide-react';
export function StatusBadge({state}:{state:'done'|'loading'}){return state==='done'?<Check size={16}/>:<LoaderCircle size={16} className="kobra-spin"/>}
