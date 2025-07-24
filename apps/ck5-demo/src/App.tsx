import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function App() {
  const [editorData, setEditorData] = useState('<p>Hello from CKEditor 5!</p>');
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-8 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center rounded-md">
          CKEditor 5 React Demo (Build Classic)
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 rounded-md">
            Rich Text Editor
          </h2>
          
          {error && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              <strong>Error:</strong> {error}
            </div>
          )}
          
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <CKEditor
              editor={ClassicEditor}
              data={editorData}
              config={{
                licenseKey: 'GPL',
                toolbar: [
                  'heading',
                  '|',
                  'bold',
                  'italic',
                  'link',
                  'bulletedList',
                  'numberedList',
                  '|',
                  'outdent',
                  'indent',
                  '|',
                  'blockQuote',
                  'insertTable',
                  'undo',
                  'redo'
                ],
                table: {
                  contentToolbar: [
                    'tableColumn',
                    'tableRow',
                    'mergeTableCells'
                  ]
                }
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setEditorData(data);
                console.log('Editor data changed:', data);
              }}
              onReady={(editor) => {
                console.log('Editor is ready to use!', editor);
                setError(null);
              }}
              onError={(error, { willEditorRestart }) => {
                console.error('CKEditor error:', error);
                setError(error.message);
                
                if (willEditorRestart) {
                  console.log('Editor will restart');
                }
              }}
            />
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2 rounded-md">
              Editor Content (HTML):
            </h3>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto border border-gray-200">
              {editorData}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
