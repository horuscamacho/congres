import { Switch } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Toggle(props) {
    const {enabled, setEnabled} = props

    return (
        <Switch.Group as="div" className="flex items-center justify-around">
      <span className="flex  flex-col">
        <Switch.Label as="span" className="text-sm font-medium text-gray-900" passive>
          Derogado
        </Switch.Label>
        <Switch.Description as="span" className="text-sm text-gray-500">
            Activa esta casilla si actualmente el artículo se encuentra derogado.
        </Switch.Description>
      </span>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={classNames(
                    enabled ? 'bg-congresogold' : 'bg-gray-200',
                    'relative inline-flex  h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-congresogold focus:ring-offset-2'
                )}
            >
        <span
            aria-hidden="true"
            className={classNames(
                enabled ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
            )}
        />
            </Switch>
        </Switch.Group>
    )
}
