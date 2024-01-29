import { CheckCircledIcon } from '@radix-ui/react-icons'

type Props = {
  message?: string
}

function FormSuccess({ message }: Props) {
  if (!message) return null
  return (
    <div className="bg-emerald-500/15 flex items-center gap-x-2 text-sm text-emerald-500 rounded-md p-3">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  )
}

export default FormSuccess
