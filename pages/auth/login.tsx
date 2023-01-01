import GoogleLogin from '@components/GoogleLogin'

export default function Login() {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: '70vh' }}
    >
      <GoogleLogin />
    </div>
  )
}
