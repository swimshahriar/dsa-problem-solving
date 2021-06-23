package pattern;

import java.util.Scanner;

public class TransposeMatrix {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc = new Scanner(System.in);

		System.out.println("Enter numbers of rows and columns: ");

		int rows = sc.nextInt();
		int cols = sc.nextInt();

		int matrix[][] = new int[rows][cols];
		int matrix_tr[][] = new int[cols][rows];

		for (int i = 0; i < rows; i++) {
			for (int j = 0; j < cols; j++) {
				System.out.println("element - [" + i + "] [" + j + "] :");
				matrix[i][j] = sc.nextInt();
				matrix_tr[j][i] = matrix[i][j];
			}
		}

		sc.close();

		System.out.println("The matrix is: ");

		for (int i = 0; i < rows; i++) {
			for (int j = 0; j < cols; j++) {
				System.out.print(matrix[i][j] + " ");

			}
			System.out.println();
		}

		System.out.println("The transpose matrix is: ");

		for (int i = 0; i < cols; i++) {
			for (int j = 0; j < rows; j++) {
				System.out.print(matrix_tr[i][j] + " ");

			}
			System.out.println();
		}
	}

}
