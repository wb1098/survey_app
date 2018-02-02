function localtunnel {
  sudo lt -s porterporter18 --port 5000
}

until localtunnel; do
echo "localtunnel crashed"
sleep 2
done